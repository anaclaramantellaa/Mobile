import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView, Pressable, StyleSheet, Alert, Image,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import { buscarProduto } from "../data/catalogo";
import { GABARITOS } from "../data/gabaritos";

/*
 * ETAPA 3 — MEDIDAS E ANEXOS (componente controlado)
 *
 * Quem usa (o wizard do NovoPedido) guarda o estado e passa:
 *   produtos : array de ids escolhidos na etapa 2, ex.: ["01", "16"]
 *   dados    : { medidas, variantes, termoConferido, fotos }  (ver criarDadosIniciais)
 *   onChange : (novosDados) => void
 *   erro     : texto de erro exibido no fim (opcional)
 *
 * No botão "Continuar" do wizard, chamar validarMedidasEAnexos(produtos, dados).
 * Este componente NÃO tem topbar, etapas, ScrollView nem botões: isso é do wizard.
 */

export function criarDadosIniciais() {
  return {
    medidas: {},     // { [idProduto]: { [campo]: "texto digitado" } }
    variantes: {},   // { [idProduto]: "Fechada" }
    termoConferido: false,
    fotos: [],       // [{ uri, ... }]
  };
}

// Aceita vírgula (teclado brasileiro) e devolve número ou NaN.
const paraNumero = (txt) => parseFloat(String(txt ?? "").replace(",", "."));

export function validarMedidasEAnexos(produtos, dados) {
  if (!produtos?.length) {
    return { ok: false, erro: "Selecione ao menos um produto na etapa anterior." };
  }
  for (const id of produtos) {
    const prod = buscarProduto(id);
    const valores = Object.values(dados.medidas[id] ?? {});
    const positivas = valores.filter((v) => paraNumero(v) > 0).length;
    if (positivas < 2) {
      return {
        ok: false,
        erro: `Preencha pelo menos duas medidas em "${prod?.nome ?? id}".`,
      };
    }
  }
  if (!dados.termoConferido) {
    return { ok: false, erro: "Marque a conferência do termo de autorização de imagem." };
  }
  return { ok: true, erro: "" };
}

export default function MedidasEAnexos({ produtos = [], dados, onChange, erro = "" }) {
  const [abaAtiva, setAbaAtiva] = useState(0);

  if (!produtos.length) {
    return (
      <View style={styles.vazio}>
        <Text style={styles.vazioTexto}>
          Nenhum produto selecionado. Volte à etapa "Região e produto" e escolha as peças.
        </Text>
      </View>
    );
  }

  const indice = Math.min(abaAtiva, produtos.length - 1);
  const id = produtos[indice];
  const produto = buscarProduto(id);
  const gabarito = GABARITOS[produto?.gabarito];
  const valores = dados.medidas[id] ?? {};

  function atualizar(parcial) {
    onChange({ ...dados, ...parcial });
  }

  function mudarMedida(campo, texto) {
    atualizar({
      medidas: { ...dados.medidas, [id]: { ...valores, [campo]: texto } },
    });
  }

  async function escolherFotos() {
    try {
      const r = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: true,
        quality: 0.7,
      });
      if (!r.canceled) atualizar({ fotos: [...dados.fotos, ...(r.assets ?? [])] });
    } catch {
      Alert.alert("Não foi possível selecionar as imagens", "Tente novamente.");
    }
  }

  function removerFoto(i) {
    atualizar({ fotos: dados.fotos.filter((_, k) => k !== i) });
  }

  const preenchidas = Object.values(valores).filter((v) => paraNumero(v) > 0).length;

  return (
    <View>
      <Text style={styles.tituloSecao}>Medidas e anexos</Text>
      <Text style={styles.descricao}>
        Cada peça possui sua própria ficha, conforme o gabarito do produto.
      </Text>

      {/* ABAS: uma por produto escolhido na etapa 2 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.abas}>
        {produtos.map((pid, i) => {
          const ativa = i === indice;
          const p = buscarProduto(pid);
          const feitas = Object.values(dados.medidas[pid] ?? {}).filter((v) => paraNumero(v) > 0).length;
          return (
            <Pressable
              key={pid}
              onPress={() => setAbaAtiva(i)}
              accessibilityRole="tab"
              accessibilityState={{ selected: ativa }}
              style={[styles.aba, ativa && styles.abaAtiva]}
            >
              <Text style={[styles.abaTexto, ativa && styles.abaTextoAtivo]}>
                {i + 1}. {(p?.nome ?? pid).split(" — ")[0]}
                {feitas >= 2 ? "  ✓" : ""}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.info}>
        <Text style={styles.infoTitulo}>{produto?.nome}</Text>
        <Text style={styles.infoTexto}>
          {gabarito?.nome} · unidade: centímetros (cm) · {preenchidas} medida(s) preenchida(s).
          Campos obrigatórios definitivos pendentes de validação clínica.
        </Text>
      </View>

      {gabarito?.variantes && (
        <View style={{ marginBottom: 6 }}>
          <Text style={styles.label}>Modelo / acabamento (conforme gabarito)</Text>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.textoSelecionado}
            placeholderStyle={styles.textoSelecionado}
            data={gabarito.variantes.map((v) => ({ label: v, value: v }))}
            labelField="label"
            valueField="value"
            placeholder="Escolher (se aplicável)"
            value={dados.variantes[id] ?? null}
            onChange={(item) =>
              atualizar({ variantes: { ...dados.variantes, [id]: item.value } })
            }
          />
        </View>
      )}

      <View style={styles.listaMedidas}>
        {gabarito?.campos.map((campo) => (
          <View key={campo} style={styles.linhaMedida}>
            <Text style={styles.nomeMedida}>{campo}</Text>
            <View style={styles.campoUnidade}>
              <TextInput
                value={valores[campo] ?? ""}
                onChangeText={(t) => mudarMedida(campo, t)}
                keyboardType="decimal-pad"
                placeholder=" "
                accessibilityLabel={`${campo}, em centímetros`}
                style={styles.inputMedida}
              />
              <Text style={styles.unidade}>cm</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.aviso}>
        <Text style={styles.avisoTexto}>
          Na demonstração são exigidas duas medidas por produto; em produção, o CTQ deverá
          confirmar as medidas obrigatórias de cada modelo.
        </Text>
      </View>

      <View style={styles.divisor} />

      <Text style={styles.tituloDocumentacao}>Documentação de apoio</Text>

      <Pressable
        onPress={() => atualizar({ termoConferido: !dados.termoConferido })}
        style={styles.termo}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: dados.termoConferido }}
      >
        <View style={[styles.checkbox, dados.termoConferido && styles.checkboxAtivo]}>
          {dados.termoConferido && <Text style={styles.checkTexto}>✓</Text>}
        </View>
        <Text style={styles.termoTitulo}>Termo de autorização de imagem conferido</Text>
      </Pressable>

      <Text style={styles.label}>Fotos da cicatriz (use apenas imagens fictícias)</Text>
      <Pressable onPress={escolherFotos} style={styles.upload}>
        <Text style={styles.uploadBotao}>Escolher arquivos</Text>
        <Text style={styles.uploadTexto}>
          {dados.fotos.length === 0
            ? "Nenhum arquivo escolhido"
            : `${dados.fotos.length} imagem(ns) selecionada(s)`}
        </Text>
      </Pressable>

      {dados.fotos.length > 0 && (
        <View style={styles.miniaturas}>
          {dados.fotos.map((f, i) => (
            <View key={`${f.uri}-${i}`} style={styles.miniaturaBox}>
              <Image source={{ uri: f.uri }} style={styles.miniatura} />
              <Pressable onPress={() => removerFoto(i)} style={styles.remover}
                accessibilityLabel={`Remover imagem ${i + 1}`}>
                <Text style={styles.removerTexto}>×</Text>
              </Pressable>
            </View>
          ))}
        </View>
      )}

      {erro !== "" && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  vazio: { padding: 20, backgroundColor: "#FFF7E9", borderRadius: 10 },
  vazioTexto: { color: "#607D94", fontSize: 13 },
  tituloSecao: { color: "#173650", fontSize: 21, fontWeight: "bold", marginBottom: 10 },
  descricao: { color: "#61798A", fontSize: 13, lineHeight: 20, marginBottom: 12 },
  abas: { marginVertical: 12, flexGrow: 0 },
  aba: {
    borderWidth: 1, borderColor: "#CDDDE0", backgroundColor: "#FFFFFF",
    borderRadius: 9, paddingVertical: 10, paddingHorizontal: 12, marginRight: 7,
  },
  abaAtiva: { backgroundColor: "#DDF3EC", borderColor: "#49A697" },
  abaTexto: { color: "#4B6577", fontSize: 12, fontWeight: "bold" },
  abaTextoAtivo: { color: "#075B51" },
  info: {
    padding: 13, backgroundColor: "#EFF6FD", borderLeftWidth: 4, borderLeftColor: "#79B9E6",
    borderRadius: 9, gap: 5, marginBottom: 16,
  },
  infoTitulo: { color: "#31536F", fontSize: 12, fontWeight: "bold" },
  infoTexto: { color: "#58738A", fontSize: 11, lineHeight: 17 },
  label: { color: "#173650", fontSize: 12, fontWeight: "bold", marginBottom: 8 },
  dropdown: { height: 40, borderColor: "#D8E5EC", borderWidth: 1.5, borderRadius: 8, paddingHorizontal: 12 },
  textoSelecionado: { fontSize: 12, color: "#173650" },
  listaMedidas: { marginTop: 14 },
  linhaMedida: {
    minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    gap: 10, borderBottomWidth: 1, borderBottomColor: "#EDF1F4",
  },
  nomeMedida: { flex: 1, color: "#173650", fontSize: 12, lineHeight: 18 },
  campoUnidade: { width: 110, height: 43, justifyContent: "center" },
  inputMedida: {
    width: "100%", height: 43, borderWidth: 1, borderColor: "#CFDEE7", borderRadius: 10,
    paddingLeft: 10, paddingRight: 32, color: "#173650", fontSize: 13, outlineStyle: "none",
  },
  unidade: { position: "absolute", right: 10, color: "#748696", fontSize: 12, pointerEvents: "none" },
  aviso: {
    marginTop: 20, padding: 13, backgroundColor: "#FFF7E9", borderLeftWidth: 4,
    borderLeftColor: "#EDB35E", borderRadius: 8,
  },
  avisoTexto: { color: "#607D94", fontSize: 11, lineHeight: 17 },
  divisor: { height: 1, backgroundColor: "#D8E5EC", marginVertical: 21 },
  tituloDocumentacao: { color: "#173650", fontSize: 16, fontWeight: "bold", marginBottom: 16 },
  termo: { flexDirection: "row", alignItems: "center", gap: 11, marginBottom: 24 },
  checkbox: {
    width: 18, height: 18, borderWidth: 1, borderColor: "#91A5B2", borderRadius: 3,
    alignItems: "center", justifyContent: "center",
  },
  checkboxAtivo: { backgroundColor: "#087C73", borderColor: "#087C73" },
  checkTexto: { color: "#FFFFFF", fontSize: 12, fontWeight: "bold" },
  termoTitulo: { flex: 1, color: "#173650", fontSize: 12, fontWeight: "bold" },
  upload: {
    minHeight: 44, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 10,
    padding: 9, borderWidth: 1, borderColor: "#CFDEE7", borderRadius: 10,
  },
  uploadBotao: {
    color: "#173650", fontSize: 12, fontWeight: "bold", borderColor: "#D8E5EC",
    borderWidth: 1.5, borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4,
  },
  uploadTexto: { color: "#61798A", fontSize: 12 },
  miniaturas: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 12 },
  miniaturaBox: { width: 72, height: 72 },
  miniatura: { width: 72, height: 72, borderRadius: 8, backgroundColor: "#E6EEF2" },
  remover: {
    position: "absolute", top: -6, right: -6, width: 22, height: 22, borderRadius: 11,
    backgroundColor: "#B3424C", alignItems: "center", justifyContent: "center",
  },
  removerTexto: { color: "#FFFFFF", fontWeight: "bold", fontSize: 14, lineHeight: 16 },
  erro: {
    color: "#A32626", backgroundColor: "#FFF0F0", padding: 10, marginTop: 14,
    borderRadius: 8, fontSize: 12,
  },
});

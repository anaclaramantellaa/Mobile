import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import MedidasEAnexos, { criarDadosIniciais, validarMedidasEAnexos } from "./MedidasEAnexos";
import { CATALOGO } from "../data/catalogo";

/*
 * Tela SÓ PARA TESTAR sua etapa sem depender das outras (simula a etapa 2
 * escolhendo produtos). Para usar, registre temporariamente em RootNavigator
 * (ou troque o conteúdo de TelaNovoPedido). Não precisa entrar no PR final.
 */
export default function MedidasEAnexosDemo() {
  const [produtos, setProdutos] = useState(["01", "16"]);
  const [dados, setDados] = useState(criarDadosIniciais());
  const [erro, setErro] = useState("");
  const [resultado, setResultado] = useState(null);

  const alternar = (id) =>
    setProdutos((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  function continuar() {
    const v = validarMedidasEAnexos(produtos, dados);
    setErro(v.erro);
    setResultado(v.ok ? JSON.stringify({ produtos, ...dados, fotos: dados.fotos.length }, null, 2) : null);
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F4F8FA" }} contentContainerStyle={{ padding: 24 }}>
      <Text style={s.h}>Simulação da etapa 2 (produtos escolhidos)</Text>
      <View style={s.chips}>
        {CATALOGO.map((p) => (
          <Pressable key={p.id} onPress={() => alternar(p.id)}
            style={[s.chip, produtos.includes(p.id) && s.chipOn]}>
            <Text style={produtos.includes(p.id) ? s.chipTxtOn : s.chipTxt}>{p.id} · {p.nome.split(" — ")[0]}</Text>
          </Pressable>
        ))}
      </View>

      <View style={s.cartao}>
        <MedidasEAnexos produtos={produtos} dados={dados} onChange={(d) => { setDados(d); setErro(""); }} erro={erro} />
      </View>

      <Pressable onPress={continuar} style={s.btn}><Text style={s.btnTxt}>Continuar →</Text></Pressable>
      {resultado && <Text style={s.json}>{resultado}</Text>}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  h: { fontWeight: "bold", color: "#173650", marginBottom: 10 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 18 },
  chip: { borderWidth: 1, borderColor: "#CDDDE0", borderRadius: 8, padding: 7, backgroundColor: "#fff" },
  chipOn: { backgroundColor: "#DDF3EC", borderColor: "#49A697" },
  chipTxt: { fontSize: 11, color: "#4B6577" }, chipTxtOn: { fontSize: 11, color: "#075B51", fontWeight: "bold" },
  cartao: { backgroundColor: "#fff", borderRadius: 17, padding: 22, borderWidth: 1, borderColor: "#DCE7ED" },
  btn: { alignSelf: "flex-end", marginTop: 18, backgroundColor: "#087C73", borderRadius: 11, paddingVertical: 12, paddingHorizontal: 18 },
  btnTxt: { color: "#fff", fontWeight: "bold" },
  json: { marginTop: 16, fontFamily: "monospace", fontSize: 11, color: "#173650" },
});

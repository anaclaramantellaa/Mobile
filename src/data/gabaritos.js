// Gabaritos de medidas (7 modelos), transcritos do protótipo HTML v2.
// Os campos obrigatórios definitivos ainda dependem de validação clínica do CTQ.
export const GABARITOS = {
  hand: {
    nome: "Medidas da mão · gabarito, pág. 1",
    campos: [
      "1 · Circunferência da palma", "2 · Circunferência do dorso", "3 · Circunferência do punho",
      "4 · Circunferência do polegar", "5 · Circunferência do indicador", "6 · Circunferência do dedo médio",
      "7 · Circunferência do anelar", "8 · Circunferência do dedo mínimo", "9 · Altura da palma",
      "a · Altura do polegar", "b · Altura do indicador", "c · Altura do dedo médio",
      "d · Altura do anelar", "e · Altura do dedo mínimo", "10 · Comprimento total da luva",
    ],
    variantes: ["Fechada", "Dedo longo sem costura", "Com dedos abertos", "Sem dedos"],
  },
  foot: {
    nome: "Medidas do pé / meia · gabarito, pág. 2",
    campos: [
      "1 · Altura da planta do pé", "2 · Circunferência do pé", "3 · Circunferência do dedão",
      "4 · Circunferência dos demais dedos", "5 · Circunferência do tornozelo", "6 · Circunferência da panturrilha",
      "7 · Circunferência do joelho", "8 · Circunferência da coxa", "9 · Comprimento total da meia",
      "A · Comprimento desejado A", "B · Comprimento desejado B", "C · Comprimento desejado C",
      "D · Comprimento desejado D",
    ],
    variantes: ["Fechada", "Fechada com dedos", "Com dedos abertos", "Sem dedos"],
  },
  short: {
    nome: "Calça curta · gabarito, pág. 3",
    campos: [
      "A · Altura total (cós × joelho)", "B · Altura interna da perna", "C · Circunferência da cintura",
      "D · Circunferência do quadril", "E · Circunferência da coxa", "F · Circunferência da coxa (joelho)",
    ],
  },
  head: {
    nome: "Cabeça e pescoço · gabarito, pág. 4",
    campos: [
      "A · Circunferência A", "B · Circunferência B", "C · Circunferência C",
      "D · Circunferência D", "1–2 · Comprimento",
    ],
    variantes: ["Máscara facial", "Colar cervical"],
  },
  pants: {
    nome: "Meia calça / perna · gabarito, pág. 5",
    campos: [
      "A · Altura total", "B · Altura interna da perna", "C · Circunferência da cintura",
      "D · Circunferência do quadril", "E · Circunferência da coxa", "F · Circunferência da coxa (joelho)",
      "G · Circunferência da panturrilha", "H · Circunferência do tornozelo",
    ],
  },
  torso: {
    nome: "Tórax com mangas · gabarito, pág. 6",
    campos: [
      "A · Altura total", "B · Largura ombro × ombro", "C · Circunferência cava ombro/braço",
      "D · Circunferência do bíceps", "E · Circunferência do cotovelo", "F · Circunferência do antebraço",
      "G · Circunferência do punho", "H · Circunferência do tronco", "I · Circunferência da cintura",
      "J · Circunferência do abdômen", "K · Circunferência da gola", "L · Comprimento pescoço × ombro",
      "M · Comprimento ombro × axila", "N · Altura ombro × punho", "O · Altura interna do braço (axila × punho)",
    ],
  },
  sleeve: {
    nome: "Luva e manga · gabarito, pág. 7",
    campos: [
      "J · Comprimento total da luva", "K · Circunferência do pulso", "L · Circunferência do antebraço",
      "M · Circunferência do cotovelo", "N · Circunferência do bíceps", "1–2 · Comprimento 1–2",
      "2–3 · Comprimento 2–3", "3–4 · Comprimento 3–4", "1–4 · Comprimento 1–4",
    ],
    variantes: ["Meio dedo", "Ponta fechada", "Sem dedo", "Dedo longo sem costura ponta"],
  },
};

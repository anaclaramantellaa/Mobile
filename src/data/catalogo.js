// Catálogo do pedido médico (HU-CTQ-01). Os códigos devem ser conferidos pelo CTQ.
// Cada produto aponta para um gabarito de medidas em gabaritos.js (campo "gabarito").
// OBS.: o catálogo "oficial" é do módulo de Ana Fernandes; o importante para a
// etapa de medidas é que o produto tenha { id, nome, gabarito }.
const lista = [
  ["01", "Luvas com dedos até o punho — mão direita", "S-47226 / E-183633", "07.01.10.001-0", "hand"],
  ["02", "Luvas com dedos até o punho — mão esquerda", "S-47226 / E-183633", "07.01.10.001-0", "hand"],
  ["03", "Meia até o joelho — pé direito", "S-47227 / E-183634", "07.01.10.002-8", "foot"],
  ["04", "Meia até o joelho — pé esquerdo", "S-47227 / E-183634", "07.01.10.002-8", "foot"],
  ["05", "Meio cano de braço direito", "S-47228 / E-183635", "07.01.10.003-6", "sleeve"],
  ["06", "Meio cano de braço esquerdo", "S-47228 / E-183635", "07.01.10.003-6", "sleeve"],
  ["07", "Meio cano de perna direita", "S-47228 / E-183706", "07.01.10.003-6", "foot"],
  ["08", "Meio cano de perna esquerda", "S-47228 / E-183706", "07.01.10.003-6", "foot"],
  ["09", "Luvas com dedos até o ombro — mão direita", "S-47229 / E-183636", "07.01.10.004-4", "sleeve"],
  ["10", "Luvas com dedos até o ombro — mão esquerda", "S-47229 / E-183636", "07.01.10.004-4", "sleeve"],
  ["11", "Meia ¾ direita", "S-47230 / E-183637", "07.01.10.005-2", "foot"],
  ["12", "Meia ¾ esquerda", "S-47230 / E-183637", "07.01.10.005-2", "foot"],
  ["13", "Meia perna direita inteira", "S-47231 / E-183638", "07.01.10.006-0", "pants"],
  ["14", "Meia perna esquerda inteira", "S-47231 / E-183638", "07.01.10.006-0", "pants"],
  ["15", "Meia calça", "S-47232 / E-183639", "07.01.10.007-9", "pants"],
  ["16", "Tórax com mangas", "S-47233 / E-183640", "07.01.10.008-7", "torso"],
  ["17", "Tórax sem mangas", "S-47234 / E-183641", "07.01.10.009-5", "torso"],
  ["18", "Cabeça e pescoço — máscara", "S-47235 / E-183642", "07.01.10.010-9", "head"],
  ["19", "Cabeça e pescoço — colar cervical", "S-47235 / E-183707", "07.01.10.010-9", "head"],
  ["20", "MODELO A VALIDAR — Calça curta (gabarito digital disponível)", "SEM CÓDIGO NO PEDIDO", "VALIDAR COM CTQ", "short"],
];

export const CATALOGO = lista.map(([id, nome, codigo, sus, gabarito]) => ({
  id, nome, codigo, sus, gabarito,
}));

export const buscarProduto = (id) => CATALOGO.find((p) => p.id === id);

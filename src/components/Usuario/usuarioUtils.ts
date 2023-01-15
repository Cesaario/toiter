const ANIMAIS = [
  { nome: "jacaré", masculino: true },
  { nome: "tamanduá", masculino: true },
  { nome: "tatu", masculino: true },
  { nome: "axolote", masculino: true },
  { nome: "texugo", masculino: true },
  { nome: "morcego", masculino: true },
  { nome: "urso", masculino: true },
  { nome: "castor", masculino: true },
  { nome: "peixe", masculino: true },
  { nome: "búfalo", masculino: true },
  { nome: "camelo", masculino: true },
  { nome: "camaleão", masculino: true },
  { nome: "chita", masculino: false },
  { nome: "esquilo", masculino: true },
  { nome: "chinchila", masculino: false },
  { nome: "chupacabra", masculino: true },
  { nome: "cormorão", masculino: true },
  { nome: "coiote", masculino: true },
  { nome: "corvo", masculino: true },
  { nome: "dingo", masculino: true },
  { nome: "dinossauro", masculino: true },
  { nome: "cão", masculino: true },
  { nome: "golfinho", masculino: true },
  { nome: "dragão", masculino: true },
  { nome: "pato", masculino: true },
  { nome: "polvo", masculino: true },
  { nome: "elefante", masculino: true },
  { nome: "furão", masculino: true },
  { nome: "raposa", masculino: false },
  { nome: "rã", masculino: false },
  { nome: "girafa", masculino: false },
  { nome: "ganso", masculino: true },
  { nome: "urso-pardo", masculino: true },
  { nome: "hamster", masculino: true },
  { nome: "porco-espinho", masculino: true },
  { nome: "hipopótamo", masculino: true },
  { nome: "hiena", masculino: false },
  { nome: "chacal", masculino: true },
  { nome: "jackalope", masculino: true },
  { nome: "iguana", masculino: false },
  { nome: "canguru", masculino: true },
  { nome: "kiwi", masculino: true },
  { nome: "coala", masculino: true },
  { nome: "kraken", masculino: true },
  { nome: "lêmure", masculino: true },
  { nome: "leopardo", masculino: true },
  { nome: "ligre", masculino: true },
  { nome: "leão", masculino: true },
  { nome: "lhama", masculino: false },
  { nome: "peixe-boi", masculino: true },
  { nome: "macaco", masculino: true },
  { nome: "alce", masculino: true },
  { nome: "nyan cat", masculino: true },
  { nome: "orangotango", masculino: true },
  { nome: "lontra", masculino: false },
  { nome: "panda", masculino: true },
  { nome: "pinguim", masculino: true },
  { nome: "ornitorrinco", masculino: true },
  { nome: "abóbora", masculino: false },
  { nome: "coelho", masculino: true },
  { nome: "guaxinim", masculino: true },
  { nome: "rinoceronte", masculino: true },
  { nome: "ovelha", masculino: false },
  { nome: "gambá", masculino: true },
  { nome: "esquilo", masculino: true },
  { nome: "tigre", masculino: true },
  { nome: "tartaruga", masculino: false },
  { nome: "unicórnio", masculino: true },
  { nome: "morsa", masculino: false },
  { nome: "lobo", masculino: true },
  { nome: "carcaju", masculino: true },
  { nome: "vombate", masculino: true },
];

export const obterNomeAnimalAleatorio = () => {
  const animalAleatorio = ANIMAIS[Math.floor(Math.random() * ANIMAIS.length)];
  const nomeTratado =
    animalAleatorio.nome[0].toUpperCase() + animalAleatorio.nome.slice(1);
  return `${nomeTratado} anônim${animalAleatorio.masculino ? "o" : "a"}`;
};

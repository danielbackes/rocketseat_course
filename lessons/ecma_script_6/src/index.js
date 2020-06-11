const usuario = {
  nome: "Daniel Backes",
  email: "danielbackes@protonmail.com"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

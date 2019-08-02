import { soma } from "./funcoes.js";

const usuario = {
  nome: "Daniel Backes",
  email: "danielbackes@protonmail.com"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

console.log(soma(1, 3));

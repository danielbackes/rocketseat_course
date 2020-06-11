// ----------------------------------------
// import { soma, sub as subFunction } from "./funcoes.js";
// console.log(soma(1, 3));
// console.log(subFunction(4, 2));

// import multi, { soma, sub } from "./funcoes.js";
// console.log(soma(1, 3));
// console.log(sub(4, 2));
// console.log(multi(4, 2));

// import * as funcoes from "./funcoes.js";
// console.log(funcoes.soma(1, 3));
// console.log(funcoes.sub(4, 2));

// // ----------------------------------------
// import somaFunction from "./soma.js";

// console.log(somaFunction(2, 3));

// ----------------------------------------
// 1.1
// import ClasseUsuario from "./functions";

// ClasseUsuario.info();

// 1.2
// import { idade } from "./functions";

// console.log(idade);

// 1.2
import Usuario, { idade as IdadeUsuario } from "./functions";

console.log(IdadeUsuario);
Usuario.info();

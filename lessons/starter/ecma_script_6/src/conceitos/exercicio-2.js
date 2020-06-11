const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = usuarios.map(usuario => usuario.idade);

console.log(idades);

const rocketseatMaiores = usuarios.filter(
  usuario => usuario.empresa === "Rocketseat" && usuario.idade > 18
);

console.log(rocketseatMaiores);

const funcionariosGoogle = usuarios.find(
  usuario => usuario.empresa === "Google"
);

console.log(funcionariosGoogle);

const maiores = usuarios
  .map(usuario => {
    return {
      ...usuario,
      idade: usuario.idade * 2
    };
  })
  .filter(usuario => usuario.idade <= 50);

console.log(maiores);

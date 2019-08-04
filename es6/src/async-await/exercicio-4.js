// import "@babel/polyfill";
// import axios from "axios";

// const buscaUsuario = usuario => {
//   axios
//     .get(`https://api.github.com/users/${usuario}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log("Usuário não existe");
//     });
// };
// buscaUsuario("diego3g");

import "@babel/polyfill";
import axios from "axios";

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};

buscaUsuario("diego3g");

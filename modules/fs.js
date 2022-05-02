const fs = require("fs");
const path = require("path");

// Criar uma pasta com Fs
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("erro: ", error);
  }
  console.log("Pasta criada com sucesso.");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "test.html"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("erro: ", error);
    }
    console.log("Arquivo criado com sucesso.");
    //Adicionar arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "test.html"),
      "Olá Mundo",
      (error) => {
        if (error) {
          return console.log("erro: ", error);
        }
        console.log("Arquivo Adicionado com sucesso.");
      }
    );
    //Ler arquivos.
    fs.readFile(
      path.join(__dirname, "/teste", "test.html"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("erro: ", erro);
        } else {
          data;
        }
        console.log(data);
      }
    );
  }
);

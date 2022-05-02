const path = require("path");

//da um console.log apenas no nome do arquivo:
console.log(path.basename(__filename));

//Nome do diretorio atual.

console.log(path.dirname(__dirname));

//extensao do arquivo
console.log(path.extname(__filename));

//Criar arquivo
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));

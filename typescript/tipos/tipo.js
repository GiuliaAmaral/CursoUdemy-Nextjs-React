"use strict";
// String
var nome = "João";
console.log(nome);
// number
var idade = 23;
idade = 23.5;
// boolean
var possuihobies = true;
// Tuplas (é um array com quantidades de tipos diferentes)
var endereco = ["Av George Eastman", 99];
console.log(endereco);
// Enums (estrutura de valores pré definidos)
var cores;
(function (cores) {
    cores[cores["cinza"] = 0] = "cinza";
    cores[cores["verde"] = 1] = "verde";
    cores[cores["azul"] = 2] = "azul";
})(cores || (cores = {}));
var minhaCor = cores.cinza;
console.log(minhaCor);
var joao = "joao";

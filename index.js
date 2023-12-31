/* Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/


const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let heroName;

readlineInterface.question('Atribua um nome: ', (name) => {
    heroName = name;
    askLevel();

function askLevel() {
  readlineInterface.question('Atribua um xp: ', (xp) => {
    let xpLevel = Number(xp);
    let classification;

    if (xpLevel < 1000) {
        classification = 'Ferro';
    } else if (xpLevel >= 1001 && xpLevel <= 2000) {
        classification = 'Bronze';
    } else if (xpLevel >= 2001 && xpLevel <= 5000) {
        classification = 'Prata';
    } else if (xpLevel >= 5001 && xpLevel <= 7000) {
        classification = 'Ouro';
    } else {
        console.log('Nível não reconhecido - escolha um valor entre 0 e 7000');
        return askLevel();
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${classification}`);
    readlineInterface.close();
  });
}

});
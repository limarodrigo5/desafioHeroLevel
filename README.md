# Sistema de Classificação de Heróis

## Objetivo

Este programa cria uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói. Em seguida, utiliza uma estrutura de decisão para atribuir uma classificação com base na quantidade de XP, seguindo as seguintes regras:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000 = Imortal
- Se XP for maior ou igual a 10.001 = Radiante

## Como Usar

1. Clone este repositório.
2. Execute o programa utilizando o Node.js.
3. Siga as instruções para atribuir um nome e XP ao herói.
4. Receba a classificação do herói.

## Exemplo de Uso

```bash
$ node index.js
Atribua um nome: Batman
Atribua um xp: 8000
O Herói de nome Batman está no nível de Platina
```
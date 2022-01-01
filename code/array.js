// const users = ["Guilherme", "pedro", "Jennifer", "Mario"]

// const gender = {
//     MAN = Symbol('M'),
//     WOMAM = Symbol('W')
// }

// const persons = [
//     {
//         name: "Gilherme",
//         age: 26,
//         gender: gender.MAN
//     },
//     {
//         name: "Pedro",
//         age: 24,
//         gender: gender.MAN
//     },
//     {
//         name: "Jennifer",
//         age: 28,
//         gender: gender.WOMAM
//     }
// ];

// // retorna a quantidade de linhas de um Arrey 
// console.log('itens', person.length);

// // Verificar se é arrey 
// console.log('A variavel person é um Arrey:', Array.isArrey(persons));

// const dessert = { type: 'pie' }; 
// dessert.type = 'pudding';

// const seconds = dessert;
// seconds.type = 'fruit';

const arr = [1, 2, 3]
const arr2 = new Array(1, 2, 3);

//array.of

const arr = Array.of(1, 2, 3); // independente do tipo cad aparametro da função vai virar um array 


arr.forEach(index => {
    console.log(index)
});
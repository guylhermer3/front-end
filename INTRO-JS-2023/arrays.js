let listaCompras = ["Maça", "Banana", "Pão", "Manteiga"];

//Imprimir segundo item da lista! (Banana).
console.log(listaCompras[1]);

console.log('\n\n\n');

//Troquei o terceiro item da lista! ( Pão por Pão de sal).
listaCompras[2] = "Pão de sal";
console.log(listaCompras[2]);

console.log('\n\n\n');

//Adicionei item na lista! (Café).
listaCompras.push("Café");
console.log(listaCompras);

console.log('\n\n\n');

//2 é a posição a onde quero adicionar o item (Uva), 0 é para não apagar os itens em sequencia!
listaCompras.splice(2, 0, "Uva");
console.log(listaCompras);

console.log('\n\n\n');

//É utilizado para pecorrer array, lista, tudo, sei lá.....
listaCompras.forEach(item => {
    console.log(`Item ${item}`);
});

console.log('\n\n\n');

// Imprime todos os números do array!
const numeros = [10, 25, 35, 36, 8, 94];

numeros.forEach(n => console.log(n));

console.log('\n\n\n');

// Imprimir os números pares!
numeros.forEach(n => {
    if (n % 2 == 0) {
        console.log(n);
    }
});
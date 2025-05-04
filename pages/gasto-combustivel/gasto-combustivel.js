function litrosNecessarios(tempo, velocidade) {
    let consumo = 12;
    let distancia = tempo * velocidade;
    return distancia / consumo;
}

let litros1 = litrosNecessarios(10, 85);
let litros2 = litrosNecessarios(2, 92);
let litros3 = litrosNecessarios(22, 67);

console.log(`${litros1.toFixed(3)}`);
console.log(`${litros2.toFixed(3)}`);
console.log(`${litros3.toFixed(3)}`);

let pi = 3.14159;

function volume(raio) {
    return (4 / 3) * pi * (raio * raio * raio);
}

let volume1 = volume(3);
let volume2 = volume(15);
let volume3 = volume(1523);

console.log(`VOLUME 1 = ${volume1.toFixed(3)}`);
console.log(`VOLUME 2 = ${volume2.toFixed(3)}`);
console.log(`VOLUME 3 = ${volume3.toFixed(3)}`);

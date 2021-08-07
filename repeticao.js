var numeroSorteado = 10
for (var a = 0; a < 20; a++) {
    if (numeroSorteado === a)
    console.log('Seu numero foi encontrato')
}

var tabuada = 7

for (var b = 0; b <= 10; b++){
    console.log('Valor de ' + tabuada + ' x ' + b + ' = ' + tabuada * b)
}

var achou = false
var possivelValor = 0

while (!achou){
    possivelValor += 1
    if (numeroSorteado === possivelValor) {
        achou = true
    } 
    else {
        console.log ('Possível valor não conrresponde ao número sorteado ' + possivelValor)
    }
}



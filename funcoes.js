function soma (operadorA, operadorB){
    var resultadoC = operadorA + operadorB
    return resultadoC
}

var resultadoSoma = soma(1, 2)
var resultadoNovoSoma = soma(50, 100)

console.log (resultadoSoma)
console.log (resultadoNovoSoma)

function olaGama (nome) {
    console.log('Olá Gama, você é oª ' + nome)
}
olaGama ('Carla')
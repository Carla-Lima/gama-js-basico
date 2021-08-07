var nome = 'Carla'

if (nome === 'Carla') {
    console.log('Legal, seu nome é esse mesmo :)')
} 
else if (nome === 'Souza') {
    console.log('Tudo bem! Esse também serve :)')
} 
else {
    console.log ('Que pena, não é você quem estou procurando.')
}

switch (nome) {
    case 'Carla':
        console.log('Legal, seu nome é esse mesmo :)')
    break;    
    case 'Souza':    
        console.log('Tudo bem! Esse também serve :)')
    break;
    default:
        console.log ('Que pena, não é você quem estou procurando.')
}

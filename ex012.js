const horarioAtual = 5;
let mensagem = ''

if (horarioAtual >= 22){
    console.log(mensagem = 'Não deveríamos comer nada, é hora de dormir');
} else if(horarioAtual >= 18 && horarioAtual < 22){
        console.log(mensagem = 'Rango da noite, vamos jantar :D');
} else if(horarioAtual >= 14 && horarioAtual < 18){
        console.log(mensagem = 'Vamos fazer um bolo para o café da tarde?');
} else if(horarioAtual >= 11 && horarioAtual <14){
    console.log(mensagem = 'Hora do almoço1');
    
}else {
    console.log(mensagem = 'Hum...cheiro de café recém-passado')
}
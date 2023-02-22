const primeiroAngulo = 60;
const segundoAngulo = 60;
const terceiroAngulo = 60;

const somaAngulos = primeiroAngulo + segundoAngulo + terceiroAngulo;
const angulosValidos = primeiroAngulo >= 0 && segundoAngulo >= 0 && terceiroAngulo >=0;

if (somaAngulos == 180 && angulosValidos === true){
    console.log(true)
} else {
    console.log(false)
}
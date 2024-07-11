/* Clasificador de números:
Escribe un programa que lea un número e imprima si es positivo, negativo o cero. */

function leerNumero(){
    let numero = prompt('Ingrese un numero: ')
    if(numero < 0){
        console.log('El número es negativo')

    }
    else if(numero >= 1){
        console.log('El número es positivo')
    }
    else{
        console.log('El número es igual a cero')


    }
}

leerNumero()
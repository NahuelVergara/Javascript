/* Calculadora básica:
Diseña un script que pida dos números y una operación a realizar entre ellos (suma, resta, multiplicación, división). Realiza la operación y muestra el resultado. Si se elige división, asegúrate de que no se intente dividir por cero. */

function main(){
    let numero1 = Number(prompt('Ingrese un número: '))
    let numero2 = Number(prompt('Ingrese otro número: '))
    alert('Eliga la operacion que quiere hacer: ')
    let opcion = Number(prompt('1)Suma\n2)Resta\n3)Multiplicación\n4)División\n'))
    
    switch (opcion) {
        case 1:
            console.log(`El resultado de la operación es: ${suma(numero1, numero2)}`) 
            break;
        case 2:
            console.log(`El resultado de la operación es: ${resta(numero1, numero2)}`)             
            break;
        case 3:
            console.log(`El resultado de la operación es: ${multiplicacion(numero1, numero2)}`) 
            break;
        case 4:
            console.log(`El resultado de la operación es: ${division(numero1, numero2)}`) 
            break;
    
        default:
            console.log('Opción ingresada incorrecta')
            break;
    }
}

function suma(numero1, numero2){
    return(numero1 + numero2)
}

function resta(numero1, numero2){
    return(numero1 - numero2)
}

function multiplicacion(numero1, numero2){
    return(numero1 * numero2)
}

function division(numero1, numero2){
    if(numero1 === 0 || numero2 === 0){
        alert('No puede dividir por cero, vuelva a ingresar')
    }
    else{
        return(numero1 / numero2)
    }
}
main()

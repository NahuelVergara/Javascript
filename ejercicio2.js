/* Comprobador de mayoría de edad:
Crea un programa que pida la edad del usuario. Si tiene 18 años o más, muestra un mensaje que diga "Eres mayor de edad". Si no, muestra "Eres menor de edad". */


function mayoiaEdad(){
    let edad = prompt('Ingrese su edad: ')
    if(edad >= 18){
        console.log('Eres mayor de edad')
    }
    else {
        console.log('Eres menor de edad')
    }
}

mayoiaEdad()
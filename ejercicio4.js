/* Descuentos en tienda:
Un comercio ofrece un descuento del 15% si la compra es mayor a 1000 pesos. Escribe un programa que dado el total de la compra, calcule el total a pagar considerando el descuento si aplica. */

function main() {
    let compra = prompt('Ingrese el monto de su compra: ')
    let descuento = compra * 0.15
    let resultado = compra - descuento
    if(compra > 1000) {
        console.log(`El total a pagar es : ${resultado}`)
    }
    else {
        console.log(`El total a pagar es : ${compra}`)

    }
}

main()
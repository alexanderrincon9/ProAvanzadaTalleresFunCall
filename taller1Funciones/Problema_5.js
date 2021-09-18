/*

Watto paga a su personal de ventas un salario 
de 3500000 mensuales, más una comisión de 1500000 por 
cada  licencia  de  software  vendida  menos  el  5%  de 
deducciones  por  impuestos.  Codifica  un  programa  que 
calcule  e  imprima  el  salario  mensual  de  un  vendedor 
dado; 

*/

// FUNCION TRADICIONAL 
/*
function salarioMensual (salariobasico,comision,cantidadlicencias,deducciones){

    comision = (1500000 * cantidadlicencias)
    salario = (salariobasico + comision)
    deducciones =(salario * 0.05)
    salarioapagar =(salario-deducciones)

    return(`el salario mensual es:"${salarioapagar}`)
}

console.log(salarioMensual (3500000,1500000,2,0.05))
*/

// FUNCION FLECHA 
let salarioMensual = (salariobasico,comision,cantidadlicencias,deducciones)=>{

    comision=(1500000 * cantidadlicencias)
    salario=(salariobasico + comision)
    deducciones =(salario * 0.05)
    salarioapagar =(salario-deducciones)

    return(`el salario mensual es $ ${salarioapagar}`)
}


console.log(salarioMensual (3500000,1500000,2,0.05))
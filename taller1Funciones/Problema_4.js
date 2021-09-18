/*
  QUI-GON  JINN  está  encargado  de  revisar  n 
sables de luz y contabilizar la cantidad de energía de 
sables que tienen negativa en Joules.

Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de 
sables  defectuosos  con  energía  negativa  fue  de  2 
sables.
 */
// FUNCION TRADICIONAL
/*
let sables =[2,4,-8,5,-6,-10,-100]
let energiaNegativa =0
 function contarsables (sables,energiaNegativa){

    for (let i = 0; i< sables.length; i++){
      if(sables[i] <0){
        energiaNegativa ++
      }
  }
  return (energiaNegativa)
}
    console.log(`Los sable de energia negativa son: ${contarsables(sables,energiaNegativa)}`)

    */

    //FUNCION FLECHA

let sables =[2,4,-8,5,-6,-10,-100]
let energiaNegativa =0
 let contarsables = (sables,energiaNegativa)=>{

    for (let i = 0; i< sables.length; i++){
      if(sables[i] <0){
        energiaNegativa ++
      }
  }
  return (energiaNegativa)
}
    console.log(`Los sable de energia negativa son: ${contarsables(sables,energiaNegativa)}`)

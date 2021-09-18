/*
Han  solo  y  Chewbacca  deben  infiltrarse  en  el 
planeta yavin4 para robar uno de los planos de una de las 10 
estrellas de la muerte, como distractor el imperio ha creado 
planos falsos y se tiene el dato de que el número de serie de 
estos planos falsos comienza por encima del número 10; es decir 
todos los planos falsos tienen números de serie consecutivos 
comenzando desde el #11. SOLO si se obtiene un plano verdadero 
Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen 
consola avisando que han despegado  
 
Configure la rutina necesaria para despegar la nave utilizando 
callbacks 
*/


function robarPlanos(id,despegarNave){

    if(id>0 && id<=10){
        console.log(`Accedimos a el plano ${id}`)
        despegarNave(null);
    }else{
        console.log(`Accedimos a el plano falso`)
        despegarNave("error");
    }
}
robarPlanos(5,function(error){

    if(error){
        console.log("Devolvete papa..")
    }else{
        console.log("Arrancando la nave..")
    }
})

// FUNCION FLECHA

let robarPlanos=(id,despegarNave)=>{

    if(id>0 && id<=10){
        console.log(`Accedimos a el plano ${id}`)
        despegarNave(null);
    }else{
        console.log(`Accedimos a el plano falso`)
        despegarNave("error");
    }
}
robarPlanos(5,error=>{

    if(error){
        console.log("Devolvete papa..")
    }else{
        console.log("Arrancando la nave..")
    }
})
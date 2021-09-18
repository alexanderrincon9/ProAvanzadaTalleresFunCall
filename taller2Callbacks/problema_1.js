/*
Yoda  el  maestro  jedi,  necesita  asignar  a  sus 
aprendices  Padawans  2  actividades  dependiendo  de  la  edad  de 
ellos: 
 Manejo de la fuerza: Si el aprendiz es menor de 15 años 
 Manejo del sable de luz: Si el aprendiz es mayor de 15 
años 
 
Inicialmente,  se  debe  programar  una  función  que  asocie  los 
datos de: {nombre, planeta, edad y estatura}  de 1 Padawan a 
un objeto y una vez este objeto sea creado se debe llamar a 
una función secundaria que clasifique y muestre en consola la 
actividad asignada al Padawan
*/

function matricularPadawan(nombre,planeta,edad,estatura,clasificarActividad){

    let padawan={

        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura, 
    }

console.log(padawan);

clasificarActividad(padawan.edad)

}

matricularPadawan("Alex","Marte",36,1.80,function(edad){

    if(edad>0 && edad<=15){

        console.log(`Manejo de Fuerza`);

    }else{

        console.log(`Manejo sable de luz`);
    }

})


// FUNCION FLECHA

let matricularPadawan=(nombre,planeta,edad,estatura,clasificarActividad)=>{

    let padawan={

        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura, 
    }

console.log(padawan);

clasificarActividad(padawan.edad)

}

matricularPadawan("johana","jupiter",50,1.20,edad=>{

    if(edad>0 && edad<=15){
        console.log(`Manejo de Fuerza`);
    }else{
        console.log(`Manejo sable de luz`);
    }

})
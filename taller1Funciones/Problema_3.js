/*
 La  luna  de  Endor  pierde  temperatura  día a  día, 
para  ello  hay  que  hacer  un  monitoreo  constante,  Cree  una 
función de flecha que permita calcular la temperatura media de 
la luna a partir de la temperatura máxima y mínima de cada día
*/

// FUNCION TRADICIONAL

let tem1
let tem2
let tem3
let tem4

function cacularMaximaTem(tem1,tem2,tem3,tem4)
{
    return (Math.max(tem1,tem2,tem3,tem4))
}
function cacularMinTem(tem1,tem2,tem3,tem4)
{
    return (Math.min(tem1,tem2,tem3,tem4))
}

let temMaxima = cacularMaximaTem(5,3,1,5)
let tenMinina = cacularMinTem(-5,-3,-1,-50)

console.log(`El promedio de temperatura es: ${(temMaxima+tenMinina)/2}°c`)

// FUNCION FLECHA

let tem1
let tem2
let tem3
let tem4

let cacularMaximaTem = (tem1,tem2,tem3,tem4) =>(Math.max(tem1,tem2,tem3,tem4))

let cacularMinTem =(tem1,tem2,tem3,tem4) =>(Math.min(tem1,tem2,tem3,tem4))


let temMaxima = cacularMaximaTem(5,3,1,5)
let tenMinina = cacularMinTem(-5,-3,-1,-50)

console.log(`El promedio de temperatura es: ${(temMaxima+tenMinina)/2}°c`)
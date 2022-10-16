let nota = prompt("cuanto te sacaste en la prueba???");
var respuesta = " "

if (nota >= 0 && nota < 2){
    respuesta = "muy mal"
}
else if (nota >=2 && nota < 5){
    respuesta = "mal"
}
else if (nota >=5 && nota < 6){
    respuesta = "tan cerca pero tan lejos"
}
else if (nota >=6 && nota < 8){
    respuesta = "bien"
}
else if (nota >=8 && nota <= 10){
    respuesta = "muy bien"
}
else if (nota > 10){
    respuesta = "wow no sabia que podias sacarte una nota tan alta"
}
else {
    respuesta = "escribi un numero... si asi hiciste la prueba no me quiero imaginar como te fue"
}



document.getElementById("notaaa").textContent = respuesta;
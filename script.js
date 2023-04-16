var question1 = prompt("Įveskite prekės kainą");

while(isNaN(question1)){
    question1 = prompt("Įveskite prekės kainą");
}

var question2 = confirm("Ar reikalingas pristatymas?");
var prekesKaina = console.log("Prekės kaina: " + Number(question1).toFixed(2) + " €");
var pristatymas = Number(5).toFixed(2)
var viso = (Number(question1) + Number(pristatymas)).toFixed(2)

if (question2 == true) {
    var question3 = prompt("Įrašykite adresą")
    console.log("Pristatymas: " + pristatymas + " €")
    // console.log("Viso: " + (question1 + pristatymas) + " €")
    console.log("Viso: " + viso + " €")
    console.log("Prekę pristatysime į " + question3 + " per 1-3 dienas.")
} else {
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}


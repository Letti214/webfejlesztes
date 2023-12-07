function kave() {
    let hossz = document.getElementById("KaveHossz").value
    let hab = document.getElementById("hab").value
    let shot = document.getElementById("shot").value
    let iz = document.getElementById("izesito").value
    let kaveFajta
    if (hossz <= 3) {
        if (hab == 0) {
            if (shot == 1) {
                kaveFajta = "Espresso"
            }
            else {
                kaveFajta = "Dupla Espresso"
            }
        }
        else {
            kaveFajta = "Cortado"
        }
    }/* innentől biztos hosszabb kávét kér mint 3*/
    else if (hab == 0) {
        kaveFajta = "Americano"
    }/* innentől biztos van benne tej */
    else if (iz == "mez") {
        kaveFajta = "Melange"
    }
    else if (iz == "csoki") {
        kaveFajta = "Mocha"
    }
    else if (shot == 2) {
        kaveFajta = "Flat White"
    }/* innentől biztos hogy 1 shot */
    else if (hossz <= 6) {
        kaveFajta = "Cappuccino"
    }
    else if (hab == 2) {
        kaveFajta = "Latte"
    }
    else {
        kaveFajta = "Latte Macchiato"
    }

    document.getElementById("kaveFajta").innerHTML = kaveFajta.valueOf()

    if (kaveFajta == "Americano") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Americano.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Espresso") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Espresso.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Dupla Espresso") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Espresso.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Cortado") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Cortado.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Melange") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Melange.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Mocha") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Mocha.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Flat White") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/FlatWhite.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Cappuccino") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Cappuccino.jpg\" width=\"300px\">"
    }
    else if (kaveFajta == "Latte") {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/Latte.jpg\" width=\"300px\">"
    }
    else {
        document.getElementById("kaveKep").innerHTML = "<img src=\"KaveFajta_kepek/LatteMacchiato.jpg\" width=\"300px\">"
    }
}
function feliz () {
    let Agua = ""
    basic.showString("¿Tiene agua?")
    if (Agua == "si") {
        let Luz = ""
        basic.showString("¿Tiene luz?")
        if (Luz == "si") {
            let Decirle_palabras_bonitas = ""
            basic.showString("¿Le estamos diciendo cosas bonitas?")
            if (Decirle_palabras_bonitas == "si") {
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
            } else {
                basic.showString("Decirle cosas bonitas")
            }
        } else {
            basic.showString("Ponerla al sol")
        }
    } else {
        basic.showString("Ponerle agua")
    }
}
function enojada () {
    let Abono = ""
    basic.showString("¿Tiene abono?")
    if (Abono == "si") {
        let Tiene_suficiente_espacio = ""
        basic.showString("¿Tiene suficiente espacio?")
        if (Tiene_suficiente_espacio == "si") {
            let Otra_luz = ""
            basic.showString("¿Tiene luz?")
            if (Otra_luz == "si") {
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            } else {
                basic.showString("Ponerla al sol")
            }
        } else {
            basic.showString("Cambiar el matero")
        }
    } else {
        basic.showString("Echarle abono")
    }
}
function sorprendido () {
    let Cambiar_matera = ""
    basic.showString("¿Le cambiaron la matera por una mas bonita?")
    if (Cambiar_matera == "si") {
        let Comprar_otra_flor = ""
        basic.showString("¿Trajeron otra flor para acompañarla?")
        if (Comprar_otra_flor == "si") {
            let Se_fue_el_sol = ""
            basic.showString("¿Ya se fue el sol?")
            if (Se_fue_el_sol == "si") {
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    . . # . .
                    . # . # .
                    . . # . .
                    `)
            } else {
                basic.showString("Cambiarla de puesto")
            }
        } else {
            basic.showString("Guardar en un lugar seguro")
        }
    } else {
        basic.showString("Cambiar matera por una nueva")
    }
}
function asustado () {
    let Llover = ""
    basic.showString("¿Va a llover?")
    if (Llover == "si") {
        let Terremoto = ""
        basic.showString("¿Hay un terremoto?")
        if (Terremoto == "si") {
            let Hormigas = ""
            basic.showString("¿Se le están subiendo las hormigas?")
            if (Hormigas == "si") {
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    . . . . .
                    . # . # .
                    # . # . #
                    `)
            } else {
                basic.showString("Subirla en un lugar alto")
            }
        } else {
            basic.showString("Guardarla en un lugar seguro")
        }
    } else {
        basic.showString("Entrarla a la casa")
    }
}

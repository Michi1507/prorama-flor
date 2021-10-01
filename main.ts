function feliz (_1: number) {
    agua = 0
    basic.showString("¿Tiene agua?")
    if (agua == 0) {
        let Luz = 0
        basic.showString("¿Tiene luz?")
        if (Luz == 0) {
            let Decirle_palabras_bonitas = 0
            basic.showString("¿Le estamos diciendo cosas bonitas?")
            if (Decirle_palabras_bonitas == 0) {
            	
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
function enojada (_2: number) {
    Abono = 0
    basic.showString("¿Tiene abono?")
    if (Abono == 0) {
        let Tiene_suficiente_espacio = 0
        basic.showString("¿Tiene suficiente espacio?")
        if (Tiene_suficiente_espacio == 0) {
            let Otra_luz = 0
            basic.showString("¿Tiene luz?")
            if (Otra_luz == 0) {
            	
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
function sorprendido (_4: number) {
    Cambiar_matera = 0
    basic.showString("¿Le cambiaron la matera por una mas bonita?")
    if (Cambiar_matera == 0) {
        let Comprar_otra_flor = 0
        basic.showString("¿Trajeron otra flor para acompañarla?")
        if (Comprar_otra_flor == 0) {
            let Se_fue_el_sol = 0
            basic.showString("¿Ya se fue el sol?")
            if (Se_fue_el_sol == 0) {
            	
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
function asustado (_3: number) {
    Llover = 0
    basic.showString("¿Va a llover?")
    if (Llover == 0) {
        let Terremoto = 0
        basic.showString("¿Hay un terremoto?")
        if (Terremoto == 0) {
            let Hormigas = 0
            basic.showString("¿Se le están subiendo las hormigas?")
            if (Hormigas == 0) {
            	
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
let Llover = 0
let Cambiar_matera = 0
let Abono = 0
let agua = 0
feliz(1)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
enojada(2)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . # # # .
    # . . . #
    `)
asustado(3)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . # . # .
    # . # . #
    `)
sorprendido(4)
basic.showLeds(`
    # # . # #
    # # . # #
    . . # . .
    . # . # .
    . . # . .
    `)

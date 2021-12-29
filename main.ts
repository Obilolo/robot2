input.onButtonPressed(Button.A, function () {
    Etat = "Gauche"
})
input.onButtonPressed(Button.AB, function () {
    Etat = "Stop"
})
input.onButtonPressed(Button.B, function () {
    Etat = "Droite"
})
let Etat = ""
let Pixels = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
Etat = "Stop"
Pixels.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
Pixels.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
Pixels.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
Pixels.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
Pixels.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
basic.forever(function () {
    if (Etat == "Droite") {
        basic.pause(500)
        Pixels.rotate(1)
        Pixels.show()
    }
    if (Etat == "Gauche") {
        basic.pause(500)
        Pixels.rotate(-1)
        Pixels.show()
    }
})

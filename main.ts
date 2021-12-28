input.onButtonPressed(Button.A, function () {
    Pixels.range(0, 1).showColor(neopixel.colors(NeoPixelColors.Blue))
    Pixels.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    Pixels.range(3, 4).showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    Pixels.clear()
    Pixels.show()
})
input.onButtonPressed(Button.B, function () {
    Pixels.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Pixels.showColor(neopixel.colors(NeoPixelColors.Blue))
})
let Pixels: neopixel.Strip = null
Pixels = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {
    Pixels.showColor(neopixel.colors(NeoPixelColors.Red))
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

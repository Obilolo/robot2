input.onButtonPressed(Button.A, function () {
    Pixels.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    Pixels.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    Pixels.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    Pixels.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    Pixels.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
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
basic.forever(function () {
    basic.pause(100)
    Pixels.rotate(1)
    Pixels.show()
})

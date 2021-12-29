def on_button_pressed_a():
    Pixels.set_pixel_color(0, neopixel.colors(NeoPixelColors.YELLOW))
    Pixels.set_pixel_color(1, neopixel.colors(NeoPixelColors.GREEN))
    Pixels.set_pixel_color(2, neopixel.colors(NeoPixelColors.BLUE))
    Pixels.set_pixel_color(3, neopixel.colors(NeoPixelColors.PURPLE))
    Pixels.set_pixel_color(4, neopixel.colors(NeoPixelColors.ORANGE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pins.servo_write_pin(AnalogPin.P0, 180)
    Pixels.clear()
    Pixels.show()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Pixels.show_color(neopixel.colors(NeoPixelColors.INDIGO))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    Pixels.show_color(neopixel.colors(NeoPixelColors.BLUE))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

Pixels: neopixel.Strip = None
Pixels = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

def on_forever():
    basic.pause(500)
    Pixels.rotate(1)
    Pixels.show()
basic.forever(on_forever)

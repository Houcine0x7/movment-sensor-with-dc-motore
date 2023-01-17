let movementsensor = 0
basic.forever(function () {
    movementsensor = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(movementsensor)
    if (movementsensor == 1) {
        pins.analogWritePin(AnalogPin.P1, 512)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (movementsensor == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})

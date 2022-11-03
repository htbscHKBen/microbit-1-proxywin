radio.onReceivedStringDeprecated(function (receivedString) {
    serial.writeLine("" + (receivedString))
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
radio.setGroup(55)

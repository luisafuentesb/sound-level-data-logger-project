let loudness = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    loudness = input.soundLevel()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(loudness)
})

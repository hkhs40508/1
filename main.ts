input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    music.playMelody("C5 G B A F A C5 B ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # . . .
        . # . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)

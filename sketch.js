var centerX
var centerY
var radius
var totalDegrees = 369
var direction
var rotation
var r = 255
var g = 255
var b = 255

function setup() {
    canvas = createCanvas(
        window.innerWidth,
        window.innerHeight
    )
    background(0)
    centerX = width / 2
    centerY = height / 2
    //changes the size of the hole of the flower
    radius = 30
    angleMode(DEGREES)
    translateX = 0
    translateY = 0
    opacity = 255
    //changes the direction of all of the petals 'in' or 'out'
    direction = "out"
    //changed the roation variable from 24 to 400 and it centered the flower?
    rotation = 400.0
}

function draw() {

    noFill()
    stroke(r, g, b, opacity)
    // added stroke weight for wispy lines
    strokeWeight(0.05)
    beginShape()
        for (let i=0; i <=totalDegrees; i++) {
            var noiseFactor = noise(i / 45, frameCount / 400)
            var x = centerX + radius * cos(i) * noiseFactor
            var y = centerY + radius * sin(i) * noiseFactor
            curveVertex(x, y)
            rotate(-PI/rotation);

        }
    endShape(CLOSE)
    if (direction == "out") {
        if (radius > height / 2) {
            direction == "in"
        } else {
            radius += 0.3
        }
    } else {
        if (radius <= 0) {
            radius = 100
            direction == "out"
        } else {
            radius -= 0.3
        }
    }
    rotation += .5
    if (frameCount > 100) {
        translateX = 0
        translateY = 0
    }
    // if (r > 255) {
    //     r = 0
    // }
    // if (g > 255) {
    //     g = 0
    // }
    // if (b > 255) {
    //     b = 0
    // }
    if (opacity == 0) {
        opacity = 255
    }
    translateX *= frameCount
    translateY *= frameCount
    opacity -= 1

    // one color flower
    // r += 1
    // g += 1
    // b += 1
}

// how do I get it to stop looping?

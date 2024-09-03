var canvas
var ctx

class Entity {
    constructor() {

    }
}

class Tile extends Entity {
    constructor() {

    }
}

window.onload = () => {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

onresize = (event) => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

setInterval(
    () => {
        ctx.fillStyle = "#00FF00"
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }, 15)
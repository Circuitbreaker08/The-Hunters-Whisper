var canvas
var ctx

class Entity {
    constructor() {
        console.log("Init")
    }

    tick() {
        console.log("Tick")
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

var entities = [

]

setInterval(
    () => {
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

        for(let entity = 0; entity < entities.length; entity++){
            entities[entity].tick()
        }
    }, 15)
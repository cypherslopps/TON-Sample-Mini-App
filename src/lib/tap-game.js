let ctx;

const clickedState = {
    x: 0,
    y: 0
}


export function initialzeGame(canvas) {
    canvas.width = innerWidth / 2;
    canvas.height = 224;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.font = "20px inter";

    canvas.addEventListener("click", e => {
        clickedState.x = e.clientX;
        clickedState.y = e.clientY;
    })

    class Text {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        draw() {
            ctx.fillStyle = "white";
            ctx.fillText("2X", this.x, this.y);
        }

        update() {
            // if (this.y < canvas.height) {
            //     this.y += 1;
            //     ctx.fillStyle = "transparent";
            // }

            this.draw();
        }
    }

    class Player {
        constructor() {
            this.x = -120;
            this.y = -120;
            this.radius = 10;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        }

        update() {
            this.x = clickedState.x - (this.radius * 2) + 10;
            this.y = clickedState.y - (this.radius * 2) + 10;

            // const text = new Text(this.x, this.y);
            // text.draw();
            this.draw();
        }
    }
    
    const player = new Player();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(animate);

        player.update();
    }

    animate();
}
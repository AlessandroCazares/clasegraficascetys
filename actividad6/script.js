document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById("miCanvas");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let tiempoInicial = 0;

    function animar(tiempo) {
        var deltaTime = tiempo - tiempoInicial;
        tiempoInicial = tiempo;

        // refresh
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let x = canvas.width / 2 + (Math.sin(tiempo / 1000) * 100); // x
        let y = canvas.height / 2 + (Math.cos(tiempo / 1000) * 100); // y
        let escala = 1 + Math.sin(tiempo / 500) * 0.5; 

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(escala, escala);
        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.fillStyle = "teal";
        ctx.fill();
        ctx.restore();

        requestAnimationFrame(animar);
    }

    requestAnimationFrame(animar);
});

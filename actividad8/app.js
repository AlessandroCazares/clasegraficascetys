window.onload = function () {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        mouse = { x: 0, y: 0 };

    canvas.addEventListener('mousemove', function (e) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mousedown', function () {
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
        canvas.addEventListener('mousemove', onMouseMove, false);
    }, false);

    canvas.addEventListener('mouseup', function () {
        canvas.removeEventListener('mousemove', onMouseMove, false);
    }, false);

    function onMouseMove() {
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
    }

    var colores = document.getElementsByClassName('colores')[0];
    colores.addEventListener('click', function (event) {
        context.strokeStyle = event.target.value;
    });

    var grosores = document.getElementsByClassName('grosores')[0];
    grosores.addEventListener('click', function (event) {
        context.lineWidth = event.target.value;
    });

    var clearButton = document.getElementById('borrar');
    clearButton.addEventListener('click', function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
};

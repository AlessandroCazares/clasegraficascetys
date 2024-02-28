document.addEventListener('mousemove', function(e) {
    // la idea original era una brújula
    const brujula = document.getElementById('imagenBrujula');
    const rect = brujula.getBoundingClientRect();
    const brujulaX = rect.left + rect.width / 2;
    const brujulaY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - brujulaY, e.clientX - brujulaX);
    const degrees = angle * (180 / Math.PI);
    brujula.style.transform = `rotate(${degrees}deg)`;

    // línea
    const linea = document.getElementById('linea');
    linea.setAttribute('x1', brujulaX);
    linea.setAttribute('y1', brujulaY);
    linea.setAttribute('x2', e.clientX);
    linea.setAttribute('y2', e.clientY);

    // cursor
    const imagenCursor = document.getElementById('imagenCursor');
    imagenCursor.style.left = (e.pageX - imagenCursor.width / 2) + 'px';
    imagenCursor.style.top = (e.pageY - imagenCursor.height / 2) + 'px';
});

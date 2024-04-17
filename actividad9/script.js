let tiempoSimulado = 0;

function actualizarRelojSimulado() {

    tiempoSimulado += 1000;

    let segundosSimulados = Math.floor(tiempoSimulado / 1000) % 60;
    let minutosSimulados = Math.floor(tiempoSimulado / 60000) % 60;
    let horasSimuladas = Math.floor(tiempoSimulado / 3600000) % 12;

    const anguloHora = (horasSimuladas + minutosSimulados / 60) * 6;
    const anguloMinuto = minutosSimulados * 6;
    const anguloSegundo = segundosSimulados * 6;

    const manecillaHora = document.querySelector('.hora .manecilla');
    const manecillaMinuto = document.querySelector('.minuto .manecilla');
    const manecillaSegundo = document.querySelector('.segundo .manecilla');

    manecillaHora.style.transform = `rotate(${anguloHora}deg)`;
    manecillaMinuto.style.transform = `rotate(${anguloMinuto}deg)`;
    manecillaSegundo.style.transform = `rotate(${anguloSegundo}deg)`;

    manecillaHora.style.transformOrigin = '50% 100%';
    manecillaMinuto.style.transformOrigin = '50% 100%';
    manecillaSegundo.style.transformOrigin = '50% 100%';
}

setInterval(actualizarRelojSimulado, 50);

window.onload = actualizarRelojSimulado;

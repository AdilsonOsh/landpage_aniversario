const dataEvento = new Date("Sep 16, 2024 14:00:00");
const timeStampEvento = dataEvento.getTime();

const contadorHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diaEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
    const minutosEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs);
    const segundosEventos = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diaEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEventos}s`;

    if (distanciaEvento < 0) {
        clearInterval(contadorHoras);
        document.getElementById('contador').innerHTML = 'O Evento terminou';
    }
}, 1000);
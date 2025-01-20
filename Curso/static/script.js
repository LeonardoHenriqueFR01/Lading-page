// Data futura para contagem regressiva
const targetDate = new Date("2025-01-31T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const countdownElement = document.getElementById("countdown");
    const textElement = document.getElementById("countdown-text");

    if (distance < 0) {
        countdownElement.innerHTML = "Tempo esgotado!";
        textElement.innerHTML = "O tempo para participar da promoção acabou!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        ${days}D: ${hours}H: ${minutes}M: ${seconds}S
    `;

    // Atualize o texto abaixo da contagem regressiva
    textElement.innerHTML = "ADQUIRIR MÉTODO FSM";
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

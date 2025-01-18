// Seleciona o display
const display = document.getElementById('calc-display');

// Seleciona todos os botões
const buttons = document.querySelectorAll('.btn');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Se o botão for "=", não adiciona ao display
        if (value === '=') {
            // Aqui você pode implementar a lógica de cálculo
            return;
        }

        // Atualiza o display com o valor clicado
        display.value += value;
    });
});

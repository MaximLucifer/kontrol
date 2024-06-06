document.getElementById('startButton').addEventListener('click', function() {
    let timeInput = document.getElementById('timeInput').value;
    let timeLeft = parseInt(timeInput, 10);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert('Пожалуйста, введите корректное время в секундах.');
        return;
    }

    let timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `Оставшееся время: ${timeLeft} секунд`;

    let timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = `Оставшееся время: ${timeLeft} секунд`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Время истекло!';
        }
    }, 1000);
});
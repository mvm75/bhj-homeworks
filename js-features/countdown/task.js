let countdown = setInterval(() => {
    const timer = document.getElementById('timer');
    if (timer.textContent == 0) {
        alert(`Вы победили в конкурсе`);
        clearInterval(countdown);
    }
    else {
        timer.textContent -= 1;
    }
}, 1000);
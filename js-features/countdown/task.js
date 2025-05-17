// Находим элемент для отображения таймера
const timerElement = document.getElementById('timer');

let secondsRemaining = parseInt(timerElement.textContent);

function updateTimer() {
  // Уменьшаем значение таймера на 1
  secondsRemaining--;

  // Обновляем текстовое содержимое элемента таймера
  timerElement.textContent = secondsRemaining;

  // Если таймер достиг нуля, завершаем отсчёт
  if (secondsRemaining === 0) {
    clearInterval(intervalId); // Останавливаем интервал
    alert('Вы победили в конкурсе!'); // Выводим уведомление
  }
}

// Запускаем таймер, обновляя его каждую секунду (1000 миллисекунд)
const intervalId = setInterval(updateTimer, 1000);
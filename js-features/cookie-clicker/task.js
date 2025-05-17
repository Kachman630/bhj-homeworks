// Находим элементы DOM
const cookie = document.getElementById('cookie'); // Картинка печеньки
const counterElement = document.getElementById('clicker__counter'); // Счётчик кликов

// Инициализируем переменные
let clickCount = 0; // Счётчик кликов
let isBig = false; // Флаг для чередования размера

// Добавляем обработчик события на клик по картинке
cookie.addEventListener('click', () => {
    // Увеличиваем счётчик кликов
    clickCount++;
    counterElement.textContent = clickCount;

    // Чередуем размеры картинки
    if (isBig) {
        cookie.width = 200; // Возвращаем к исходному размеру
        cookie.height = 200;
    } else {
        cookie.width = 300; // Увеличиваем размер
        cookie.height = 300;
    }

    // Переключаем флаг
    isBig = !isBig;
});

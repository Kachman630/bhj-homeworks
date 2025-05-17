// Функция для получения лунки по индексу
function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Счётчики побед и поражений
let deadCount = 0; // Количество побед
let lostCount = 0; // Количество поражений

// Обновление счётчиков на странице
function updateStats() {
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;
}

// Проверка условий победы или поражения
function checkGameStatus() {
    if (deadCount === 10) {
        alert("Вы победили! Убили 10 кротов!");
        resetGame();
    } else if (lostCount === 5) {
        alert("Вы проиграли! Пропустили 5 кротов!");
        resetGame();
    }
}

// Сброс статистики
function resetGame() {
    deadCount = 0;
    lostCount = 0;
    updateStats();
}

// Регистрация обработчиков событий для каждой лунки
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            deadCount++; // Увеличиваем счётчик побед
        } else {
            lostCount++; // Увеличиваем счётчик поражений
        }
        updateStats();
        checkGameStatus();
    };
}

// Генерация случайной лунки с кротом
function generateRandomMole() {
    const holes = document.querySelectorAll('.hole');
    const randomIndex = Math.floor(Math.random() * holes.length);

    // Удаляем класс 'hole_has-mole' у всех лунок
    holes.forEach(hole => hole.classList.remove('hole_has-mole'));

    // Добавляем класс 'hole_has-mole' к случайной лунке
    holes[randomIndex].classList.add('hole_has-mole');
}

// Запуск генерации крота каждые 1.5 секунды
setInterval(generateRandomMole, 1500);
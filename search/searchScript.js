document.addEventListener('DOMContentLoaded', () => {
    const countOfCards = 10; // Сколько раз нужно продублировать
    const container = document.getElementById('container'); // Куда добавляем карточки
    const searchResTemplate = document.getElementById('searchRes'); // Исходная карточка

    if (!searchResTemplate) {
        console.error("Элемент с id 'searchRes' не найден.");
        return;
    }

    for (let i = 1; i <= countOfCards; i++) {
        // Клонируем карточку
        const clonedCard = searchResTemplate.cloneNode(true);
        clonedCard.style.display = "flex"; // Убираем скрытие
        clonedCard.id = `searchRes-${i}`; // Уникальный ID для каждой карточки

        // Изменяем содержимое
        clonedCard.querySelector('.cardTitle').textContent = (JSON.parse(localStorage.getItem("info"))).place + ` ${i}`;
        clonedCard.querySelector('.cardDescription').textContent = 
            `from: ${(JSON.parse(localStorage.getItem("info"))).startingDate}
            to: ${(JSON.parse(localStorage.getItem("info"))).endingDate}
            for ${Number((JSON.parse(localStorage.getItem("info"))).adult)+Number((JSON.parse(localStorage.getItem("info"))).child)} persons and ${(JSON.parse(localStorage.getItem("info"))).room} rooms
            `
        //`This is card number ${i}`;

        // Добавляем карточку в контейнер
        container.appendChild(clonedCard);
    }




    console.log(localStorage.getItem("userInfo"))
    console.log(localStorage.getItem("tripInfo"))
});












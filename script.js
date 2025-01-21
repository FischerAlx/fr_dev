const countAdult = document.getElementById('countAdult');
const countChild = document.getElementById('countChild');
const countRoom = document.getElementById('countRoom');
const decrementAdult = document.getElementById('decrementAdult');
const incrementAdult = document.getElementById('incrementAdult');
const decrementChild = document.getElementById('decrementChild');
const incrementChild = document.getElementById('incrementChild');
const decrementRoom = document.getElementById('decrementRoom');
const incrementRoom = document.getElementById('incrementRoom');
    
    
let countAdultNum = 0;
let countChildNum = 0;
let countRoomNum = 0;
    
if (decrementAdult && decrementChild && decrementRoom && incrementAdult && incrementChild && incrementRoom) {
    function updateCountAdult() {
        countAdult.textContent = countAdultNum;
        decrementAdult.disabled = countAdultNum <= 0;
    }
    function updateCountChild() {
        countChild.textContent = countChildNum;
        decrementChild.disabled = countChildNum <= 0;
    }
    function updateCountRoom() {
        countRoom.textContent = countRoomNum;
        decrementRoom.disabled = countRoomNum <= 0;
    }
    decrementAdult.addEventListener('click', () => {
        countAdultNum--;
        updateCountAdult();
    }); 
    decrementChild.addEventListener('click', () => {
        countChildNum--;
        updateCountChild();
    }); 
    decrementRoom.addEventListener('click', () => {
        countRoomNum--;
        updateCountRoom();
    });
    incrementAdult.addEventListener('click', () => {
        countAdultNum++;
        updateCountAdult();
    });
    incrementChild.addEventListener('click', () => {
        countChildNum++;
        updateCountChild();
    });
    incrementRoom.addEventListener('click', () => {
        countRoomNum++;
        updateCountRoom();
    });
    updateCountAdult();
    updateCountChild();
    updateCountRoom();
}




const date = new Date();
const daysInFirstMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); 
const daysInSecondMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate(); 

const firstCalendarContainer = document.getElementById('firstMonthCalendar');
const secondCalendarContainer = document.getElementById('secondMonthCalendar');

if (firstCalendarContainer && secondCalendarContainer) {
    for (let day = 1; day <= daysInFirstMonth; day++) {
        const button = document.createElement('button');
        button.textContent = day;
        button.classList.add('calendar-button');
        firstCalendarContainer.appendChild(button);
    }

    for (let day = 1; day <= daysInSecondMonth; day++) {
        const button = document.createElement('button');
        button.textContent = day;
        button.classList.add('calendar-button');
        secondCalendarContainer.appendChild(button);
    }
}





function toggleDisplay(target, others) {
    const isHidden = target.style.display === "none" || target.style.display === "";
    
    target.style.display = isHidden ? "block" : "none";
    others.forEach(element => {
        element.style.display = "none";
    });
}



//search dublicator
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
        clonedCard.querySelector('.cardTitle').textContent = `Card Title ${i}`;
        clonedCard.querySelector('.cardDescription').textContent = `This is card number ${i}`;

        // Добавляем карточку в контейнер
        container.appendChild(clonedCard);
    }
});





document.addEventListener("DOMContentLoaded", () => {
    
    const finderPlaceCard = document.getElementById('finderPlaceExtension');
    const finderDateCard = document.getElementById('finderDateExtension');
    const finderNumberOfVisitorsExtensionCard = document.getElementById('finderNumberOfVisitorsExtension');

    const modalContainer = document.getElementById('modalContainer');
    const openModalButton = document.getElementById('openModal');
    

    let startingDate = "Check-in Date"
    let endingDate = "Check-out Date"
    let adultNumber

    if (finderPlaceCard && finderDateCard && finderNumberOfVisitorsExtensionCard) {
        finderPlaceCard.style.display = "none";
        finderDateCard.style.display = "none";
        finderNumberOfVisitorsExtensionCard.style.display = "none";
    }



    //document.getElementById('finderDate').innerHTML = `${startingDate} ⸺ ${endingDate}  `;



    window.finderPlace = () => toggleDisplay(finderPlaceCard, [finderDateCard, finderNumberOfVisitorsExtensionCard]);
    window.finderDate = () => toggleDisplay(finderDateCard, [finderPlaceCard, finderNumberOfVisitorsExtensionCard]);
    window.finderNumberOfVisitors = () => toggleDisplay(finderNumberOfVisitorsExtensionCard, [finderPlaceCard, finderDateCard]);

    

    window.choosenCity = function() {
        finderPlace();
        finderDateCard.style.display = "block";
        
        const button = event.currentTarget; 
        const choosenCity = button.querySelector("b"); 

        const textNodes = Array.from(button.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);

        //document.getElementById("finderPlace").placeholder = choosenCity.textContent;
        if (choosenCity) {
            const inputField = document.getElementById("finderPlace");
            inputField.value = choosenCity.textContent + ", " +  textNodes[0].nodeValue.trim();
        }

        localStorage.setItem('choosenCity', inputField.value);


    }




    if (openModalButton) {
        openModalButton.addEventListener('click', () => {

            modalContainer.innerHTML = `
                <div id="modal">
                    <span id="modalClose">&times;</span>
                    <p>Нou have successfully registered</p>
                    <button id="modalAction">SignIn</button>
                </div>
            `;

            modalContainer.style.display = 'flex'; 


            document.getElementById('modalClose').addEventListener('click', () => {
                modalContainer.style.display = 'none';
            });


            document.getElementById('modalAction').addEventListener('click', () => {
                alert('authorization is not implemented at the moment!');
            });
        });
    }   

    //<div style="z-index: -1000;  width: 5000px; height: 500px; margin: -350px; background-color: #252525;"></div>
});



if (document.getElementById('registrationForm')) {
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();


        const firstname = document.querySelector('[name="firstname"]').value;
        const lastname = document.querySelector('[name="lastname"]').value;
        const email = document.querySelector('[name="email"]').value;
        const password = document.querySelector('[name="password"]').value;

        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);




        console.log('User Data saved to localStorage:', {
            firstname,
            lastname,
            email,
            password
        });




    });
}









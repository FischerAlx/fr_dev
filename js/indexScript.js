document.addEventListener('DOMContentLoaded', () => {
    const countAdult = document.getElementById('countAdult');
    const countChild = document.getElementById('countChild');
    const countRoom = document.getElementById('countRoom');
    const decrementAdult = document.getElementById('decrementAdult');
    const incrementAdult = document.getElementById('incrementAdult');
    const decrementChild = document.getElementById('decrementChild');
    const incrementChild = document.getElementById('incrementChild');
    const decrementRoom = document.getElementById('decrementRoom');
    const incrementRoom = document.getElementById('incrementRoom');

    const date = new Date();
    const daysInFirstMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); 
    const daysInSecondMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0).getDate(); 
    
    const firstCalendarContainer = document.getElementById('firstMonthCalendar');
    const secondCalendarContainer = document.getElementById('secondMonthCalendar');

    const finderPlaceCard = document.getElementById('finderPlaceExtension');
    const finderDateCard = document.getElementById('finderDateExtension');
    const finderNumberOfVisitorsExtensionCard = document.getElementById('finderNumberOfVisitorsExtension');
    const modalContainer = document.getElementById('modalContainer');
    const openModalButton = document.getElementById('openModal');

    let startingDate = "Check-in Date"
    let endingDate = "Check-out Date"



    if (finderPlaceCard && finderDateCard && finderNumberOfVisitorsExtensionCard) {
        finderPlaceCard.style.display = "none";
        finderDateCard.style.display = "none";
        finderNumberOfVisitorsExtensionCard.style.display = "none";
    }



    if (decrementAdult && decrementChild && decrementRoom && incrementAdult && incrementChild && incrementRoom) {

        function changeCount(element) {
            const currCount = Number(element.textContent)
            if (event.target.textContent == "+") {
                element.textContent = currCount + 1
            } else if (event.target.textContent == "-" && Number(element.textContent) > 0) {
                    element.textContent = currCount - 1
            }
        }
        
        function crement(element) {
            return (event) => {changeCount(element);}  
        }

        decrementAdult.addEventListener('click', crement(countAdult)); 
        decrementChild.addEventListener('click', crement(countChild)); 
        decrementRoom.addEventListener('click', crement(countRoom));

        incrementAdult.addEventListener('click', crement(countAdult));
        incrementChild.addEventListener('click', crement(countChild));
        incrementRoom.addEventListener('click', crement(countRoom));

    }

    function finderNumberOfVisitors() {

    }




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










    
    
    //document.getElementById('finderDate').innerHTML = `${startingDate} ⸺ ${endingDate}  `;
    window.finderPlace = () => toggleDisplay(finderPlaceCard, [finderDateCard, finderNumberOfVisitorsExtensionCard]);
    window.finderDate = () => toggleDisplay(finderDateCard, [finderPlaceCard, finderNumberOfVisitorsExtensionCard]);
    window.finderNumberOfVisitors = () => toggleDisplay(finderNumberOfVisitorsExtensionCard, [finderPlaceCard, finderDateCard]);
    window.choosenCity = function() {
        finderPlace();
        finderDateCard.style.display = "block";
        const buttonOfChoosenCity = event.currentTarget; 
        const choosenCity = buttonOfChoosenCity.querySelector("b"); 
        const textNodes = Array.from(buttonOfChoosenCity.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        //document.getElementById("finderPlace").placeholder = choosenCity.textContent;
        if (choosenCity) {
            const inputField = document.getElementById("finderPlace");
            inputField.value = choosenCity.textContent + ", " +  textNodes[0].nodeValue.trim();
        }
        localStorage.setItem('choosenCity', inputField.value);
    }









});


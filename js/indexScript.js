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



    const tripInfo = {
        place: "",
        startingDate: null,
        endingDate: null,
        adult: 0,
        child: 0,
        room: 0,
    }

    let startingDate = new Date("invalid-date-string");
    let endingDate = new Date("invalid-date-string");



    if (finderPlaceCard && finderDateCard && finderNumberOfVisitorsExtensionCard) {
        finderPlaceCard.style.display = "none";
        finderDateCard.style.display = "none";
        finderNumberOfVisitorsExtensionCard.style.display = "none";
    }





    

    if (firstCalendarContainer && secondCalendarContainer) {
        for (let day = 1; day <= daysInFirstMonth; day++) {
            const button = document.createElement('button');
            button.textContent = day;
            button.classList.add('firstCalendarButton');
            firstCalendarContainer.appendChild(button);
        }

        for (let day = 1; day <= daysInSecondMonth; day++) {
            const button = document.createElement('button');
            button.textContent = day;
            button.classList.add('secondCalendarButton');
            secondCalendarContainer.appendChild(button);
        }
    }

    const firstCalendarButtons = document.querySelectorAll('.firstCalendarButton');
    const secondCalendarButtons = document.querySelectorAll('.secondCalendarButton');

    firstCalendarButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("starting: " + startingDate);
            console.log("ending: " + endingDate);
            console.log(tripInfo)
            if (isNaN(startingDate)) {
                startingDate = new Date();
                startingDate.setDate(parseInt(button.textContent));
                startingDate.setMonth(0);
                tripInfo.startingDate = startingDate.getDate() + ", " + (startingDate.getMonth() + 1);
                button.style.background = '#122b39';
                console.log(button);
            } else {
                let bufDate = new Date(2025, 0, parseInt(button.textContent))
                if (startingDate < bufDate) {
                    endingDate = new Date();
                    endingDate.setDate(parseInt(button.textContent));
                    endingDate.setMonth(0);
                    tripInfo.endingDate = endingDate.getDate() + ", " + (endingDate.getMonth() + 1);
                    button.style.background = '#122b39';
                    startingDate = new Date("invalid-date-string");
                    endingDate = new Date("invalid-date-string");
                }
            }
            console.log("starting: " + startingDate);
            console.log("ending: " + endingDate);
            console.log(tripInfo)

        });
    });
    secondCalendarButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("starting: " + startingDate);
            console.log("ending: " + endingDate);
            console.log(tripInfo)
            if (isNaN(startingDate)) {
                startingDate = new Date();
                startingDate.setDate(parseInt(button.textContent));
                startingDate.setMonth(1);
                tripInfo.startingDate = startingDate.getDate() + ", " + (startingDate.getMonth() + 1);
                button.style.background = '#122b39';
                console.log(button);
            } else {
                let bufDate = new Date(2025, 1, parseInt(button.textContent))
                if (startingDate < bufDate) {
                    endingDate = new Date();
                    endingDate.setDate(parseInt(button.textContent));
                    endingDate.setMonth(1);
                    tripInfo.endingDate = endingDate.getDate() + ", " + (endingDate.getMonth() + 1);
                    button.style.background = '#122b39';
                    startingDate = new Date("invalid-date-string");
                    endingDate = new Date("invalid-date-string");
                }
            }
            console.log("starting: " + startingDate);
            console.log("ending: " + endingDate);
            console.log(tripInfo)

        });
    });















    if (decrementAdult && decrementChild && decrementRoom && incrementAdult && incrementChild && incrementRoom) {

        function changeCount(element) {
            const currCount = Number(element.textContent)
            if (event.target.textContent == "+") {
                element.textContent = currCount + 1;
            } else if (event.target.textContent == "-" && Number(element.textContent) > 0) {
                    element.textContent = currCount - 1;
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

    window.finderNumberOfVisitorsDoneButton = () => {
        finderNumberOfVisitors();
        document.getElementById("finderNumberOfVisitors").textContent = countAdult.textContent + " Adults - " + countChild.textContent + " children - " + countRoom.textContent + " room";
        tripInfo.adult = countAdult.textContent;
        tripInfo.child = countChild.textContent;
        tripInfo.room = countRoom.textContent;
    }

    //document.getElementById("finderNumberOfVisitorsDoneButton").addEventListener('click', finderNumberOfVisitorsDoneButton());


















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
        //localStorage.setItem('choosenCity', inputField.value);
        tripInfo.place = inputField.value
    }









});


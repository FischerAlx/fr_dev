document.addEventListener('DOMContentLoaded', () => {
    console.log(localStorage.getItem("userInfo"))
    console.log(localStorage.getItem("tripInfo"))
    const countOfCards = 10; // Die Anzahl der Varianten wird später durch die vom Server erhaltene Antwort festgelegt
    const container = document.getElementById('container'); // Wo wir die Karten hinzufügen
    const searchResTemplate = document.getElementById('searchRes'); // Quellkarte

    if (!searchResTemplate) {
        console.error("Das Element mit der id 'searchRes' wurde nicht gefunden.");
        return;
    }

    // es ist möglich, dem Server eine Anfrage mit dem erforderlichen Suchobjekt zu senden 
    // und die erhaltene Variantenliste mit Hilfe einer Schleife zu öffnen und zu speichern, 
    // um dann alle Varianten auf Karten entsprechend den zuvor gespeicherten Varianten zu geben 
    // (mit anderen Worten, die Karten werden nicht identisch sein).

    for (let i = 1; i <= countOfCards; i++) {
        // Klonen der Karte
        const clonedCard = searchResTemplate.cloneNode(true);
        clonedCard.style.display = "flex";
        clonedCard.id = `searchRes-${i}`; // Eindeutige ID für jede Karte

        // Ändern des Inhalts
        clonedCard.querySelector('.cardTitle').textContent = (JSON.parse(localStorage.getItem("tripInfo"))).place + ` ${i}`;
        clonedCard.querySelector('.cardDescription').innerHTML  =
            `from: ${(JSON.parse(localStorage.getItem("tripInfo"))).startingDate} <br>
            to: ${(JSON.parse(localStorage.getItem("tripInfo"))).endingDate} <br>
            for ${Number((JSON.parse(localStorage.getItem("tripInfo"))).adult)+Number((JSON.parse(localStorage.getItem("tripInfo"))).child)} persons - ${(JSON.parse(localStorage.getItem("tripInfo"))).room} rooms <br>
            `
        //`This is card number ${i}`;

        // Hinzufügen einer Karte zum Container
        container.appendChild(clonedCard);
    }




    console.log(localStorage.getItem("userInfo"))
    console.log(localStorage.getItem("tripInfo"))
});












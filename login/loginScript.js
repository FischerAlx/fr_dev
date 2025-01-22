document.addEventListener("DOMContentLoaded", () => {

    const modalContainer = document.getElementById('modalContainer');
    const openModalButton = document.getElementById('openModal');

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
    
});











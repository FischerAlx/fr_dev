document.addEventListener("DOMContentLoaded", () => {

    const modalContainer = document.getElementById('modalContainer');
    const openModalButton = document.getElementById('openModal');

    const user = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
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

    
    if (document.getElementById('registrationForm')) {
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();


            user.firstname = document.querySelector('[name="firstname"]').value;
            user.lastname = document.querySelector('[name="lastname"]').value;
            user.email = document.querySelector('[name="email"]').value;
            user. password = document.querySelector('[name="password"]').value;

            //localStorage.setItem('firstname', firstname);
            //localStorage.setItem('lastname', lastname);
            //localStorage.setItem('email', email);
            //localStorage.setItem('password', password);

            localStorage.setItem("userInfo", JSON.stringify(user));






        });
    }



    window.openAlert = () => {
        alert("coming soon!");
        console.log(localStorage.getItem("userInfo"))
    } 


    console.log(localStorage.getItem("userInfo"))
    console.log(localStorage.getItem("tripInfo"))
    
});











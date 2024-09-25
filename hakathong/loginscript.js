const wrapper=document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{

    wrapper.classList.add('active');

});

loginLink.addEventListener('click',()=>{

    wrapper.classList.remove('active');

});

btnPopup.addEventListener('click',()=>{

    wrapper.classList.add('active-popup');

});

iconClose.addEventListener('click',()=>{

    wrapper.classList.remove('active-popup');

});


function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    if (loginForm.classList.contains("hidden")) {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        loginBtn.classList.add("active");
        registerBtn.classList.remove("active");
    } else {
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
        registerBtn.classList.add("active");
        loginBtn.classList.remove("active");
    }
}

function handleLogin(event) {
    event.preventDefault();
    // Simulate login action
    const email = event.target[0].value;
    const password = event.target[1].value;
    alert(`Logging in with Email: ${email} and Password: ${password}`);
}

function handleRegister(event) {
    event.preventDefault();
    // Simulate registration action
    const email = event.target[0].value;
    const username = event.target[1].value;
    const password = event.target[2].value;
    alert(`Registering with Email: ${email}, Username: ${username}, and Password: ${password}`);
}

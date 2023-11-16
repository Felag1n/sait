const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active--sign-up");
    container.classList.remove("active--sign-in");
});

loginBtn.addEventListener('click', () => {
    container.classList.add("active--sign-in");
    container.classList.remove("active--sign-up");
});
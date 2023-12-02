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

var passwordToggles = document.getElementsByClassName("password-toggle");
var passwordToggleHandler = function() {
    var input = this.parentElement.getElementsByTagName('input')[0];
    if (this.classList.contains('showed')) {
        this.classList.remove('showed');
        input.type = 'password';
    } else {
        this.classList.add('showed');
        input.type = 'text';
    }
};
for (var i = 0; i < passwordToggles.length; i++) {
    passwordToggles[i].addEventListener('click', passwordToggleHandler, false);
}
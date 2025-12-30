let user = document.getElementById('username');
let btn = document.getElementById('login-btn');

btn.addEventListener('click', function (e) {
    alert(`Hello again, ${user.value}!`);
});
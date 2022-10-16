const signin = document.getElementById('signin');
const form = document.querySelector('form');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);

  xhr.addEventListener('load', () => {
    if (xhr.readyState === 4) {
      let response = JSON.parse(xhr.response);
      if (response.success === false) {
        alert('Неверный логин/пароль');
      } else {
        localStorage.setItem('user_id', response['user_id']);
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        welcome.querySelector('span').textContent = response['user_id'];
      }
    }
  });

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.send(formData);
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage['user_id']) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.querySelector('span').textContent = localStorage['user_id'];
  }
});
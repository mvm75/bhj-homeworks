const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (e) => {
    progress.value = event.loaded / event.total;
  });

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  let data = new FormData(form);
  xhr.send(data);
});
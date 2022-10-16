const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', (e) => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    let res = JSON.parse(xhr.response);
    let valutes = Object.values(res.response['Valute']);

    valutes.forEach((item) => {
      items.innerHTML += `<div class="item">
        <div class="item__code">${item['CharCode']}</div>
        <div class="item__value">${item['Value']}</div>
        <div class="item__currency">руб.</div>
      </div>`
    })
  }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
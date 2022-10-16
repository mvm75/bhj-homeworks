const question = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', (e) => {
  if (xhr.readyState === xhr.DONE) {
    let res = JSON.parse(xhr.response);
    let data = res['data'];

    question.textContent = data.title;
    data.answers.forEach((answer) => {
      answers.innerHTML += `<button class="poll__answer">${answer}</button>`;
    });

    const answersBtns = document.querySelectorAll('.poll__answer');
    answersBtns.forEach((btn) => btn.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    }));
  }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
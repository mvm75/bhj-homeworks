const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  if (document.cookie === '') {
    modal.classList.add('modal_active');
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  let date = new Date();
  date.setTime(date.getTime() + (3600 * 1000 * 24));
  document.cookie = 'modalClosed=true; expires=' + date.toUTCString();
});
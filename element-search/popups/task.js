let modalMain = document.getElementById("modal_main");
modalMain.classList.add('modal_active');

let modalClose = document.getElementsByClassName('modal__close');
let modalCloseArray = Array.from(modalClose);

let modalSuccess = document.getElementById('modal_success');
let showSuccess = document.querySelector('.show-success');

for (let i = 0; i < modalCloseArray.length; i++) {
    modalCloseArray[i].onclick = function() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
};

showSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}
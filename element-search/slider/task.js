const sliderPrev = document.querySelector('.slider__arrow_prev');
const sliderNext = document.querySelector('.slider__arrow_next');
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));

let slide = 0;

sliderPrev.onclick = () => {
    slide++;
    showSlide(slide);
}

sliderNext.onclick = () => {
    slide--;
    showSlide(slide);
}

function showSlide(n) {

    const indexActive = sliderItem.findIndex(item => item.className === "slider__item slider__item_active");
    sliderItem[indexActive].classList.remove('slider__item_active');

    if (n > sliderItem.length) {
        slide = 1;
    } else if (n < 1) {
        slide = sliderItem.length;
    }

    sliderItem[slide - 1].classList.add('slider__item_active');
}
const btnRight = document.querySelector(".footer__btn-r");
const btnLeft = document.querySelector(".footer__btn-l");

let position = 0;
const slideToShow = 1;
const slideToScroll = 1;

const track = document.querySelector(".footer__slide");
const items = document.querySelectorAll(".footer__card");
const amountItems = items.length;
const container = document.querySelector(".footer__window");

const itemWidth = container.clientHeight / slideToShow;
const movePosition = slideToScroll * itemWidth;


items.forEach((item) => item.style.minWidth = `${itemWidth}px`);


btnRight.addEventListener("click", () => {

  const itemRigth = amountItems - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

  position -= itemRigth >= slideToScroll ? movePosition : itemRigth * itemWidth;

  setPosition();

})

btnLeft.addEventListener("click", () => {
  const itemLeft = Math.abs(position) / itemWidth;

  position += itemLeft >= slideToScroll ? movePosition : itemLeft * itemWidth;

  setPosition();

})

function setPosition () {
  track.style.transform = `translateY(${position}px)`;
};
const responsive = document.querySelector('.card_responsive');
const commerce = document.querySelector('.card_commerce');
const daily = document.querySelector('.card_daily');
const search = document.querySelector('.card_search');

const tabsColections = document.querySelectorAll('.tabs__block');
const tabs__card = document.querySelectorAll('.tabs__card');



responsive.addEventListener('click', () => {
  tabsColections.forEach((tab) => {
    if(tab.classList.contains('tabs__block_responsive')) {
      tab.classList.remove('d-none');
    }
    else
      tab.classList.add('d-none');
  });

  tabs__card.forEach((card) => {
    if(card.classList.contains('card_responsive')) {
      card.classList.add('active-card');
    }
    else
      card.classList.remove('active-card');
  });

})



commerce.addEventListener('click', () => {
  tabsColections.forEach((tab) => {
    if(tab.classList.contains('tabs__block_commercy')) {
      tab.classList.remove('d-none');
    }
    else
      tab.classList.add('d-none');
  });

  tabs__card.forEach((card) => {
    if(card.classList.contains('card_commerce')) {
      card.classList.add('active-card');
    }
    else
      card.classList.remove('active-card');
  });

})


daily.addEventListener('click', () => {
  tabsColections.forEach((tab) => {

    if(tab.classList.contains('tabs__block_daily')) {
      tab.classList.remove('d-none');
    }
    else
      tab.classList.add('d-none');
  });

  tabs__card.forEach((card) => {
    if(card.classList.contains('card_daily')) {
      card.classList.add('active-card');
    }
    else
      card.classList.remove('active-card');
  });

})


search.addEventListener('click', () => {
  tabsColections.forEach((tab) => {
    if(tab.classList.contains('tabs__block_search')) {
      tab.classList.remove('d-none');
    }
    else
      tab.classList.add('d-none');
  });
  tabs__card.forEach((card) => {

    if(card.classList.contains('card_search')) {
      card.classList.add('active-card');
    }
    else
      card.classList.remove('active-card');
  });
  
})








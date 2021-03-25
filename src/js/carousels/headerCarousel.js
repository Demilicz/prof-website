import  $ from 'jquery';

$(function() {

  $('.header__carousel').slick({
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          draggable: true
        }
      }
    ]
  });
});
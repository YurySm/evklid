document.addEventListener('DOMContentLoaded', () => {
    //slider
    $('.promo__slider').slick({
      arrows: false,
      dots: true,
      // dotsClass: '.promo__slider-counter',
      appendDots: '.promo__slider-counter',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    //tabs
    const createTabs = () => {
      const tabBtns = document.querySelectorAll('.btn-tab-item'),
            tabContents = document.querySelectorAll('.working__content');
      
      tabContents.forEach((content) => {
        content.style.display = 'none';
      });
      tabBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
          tabBtns.forEach((btn, i) => {
            btn.classList.remove('btn-tab-item_active');
          });
          tabContents.forEach((content, i) => {
            content.style.display = 'none';
          });
          btn.classList.add('btn-tab-item_active');
          tabContents[i].style.display = 'flex';
        });
      });
      tabBtns[0].click();
    };
    createTabs();

    //accordion
    const runAccordion = () => {
      const btnsQuestions = document.querySelectorAll('.btn-questions'),
            btnsText   = document.querySelectorAll('.questions__descr');
            
      btnsText.forEach(text => {
        text.classList.remove('db');
        text.parentElement.querySelector('.questions__trigger').classList.remove('questions__trigger_active');
      });
      btnsQuestions.forEach(btn => {
        btn.addEventListener('click', e => {
          btnsText.forEach(text => {
            text.classList.remove('db');
            text.parentElement.querySelector('.questions__trigger').classList.remove('questions__trigger_active');
          });
          if(e.target) {
            if (!btn.classList.contains('act')) {
              btn.classList.add('act');
              btn.nextElementSibling.classList.add('db');
              btn.parentElement.querySelector('.questions__trigger').classList.add('questions__trigger_active');
            } else {
              btn.classList.remove('act');
              btn.nextElementSibling.classList.remove('db');
              btn.parentElement.querySelector('.questions__trigger').classList.remove('questions__trigger_active');
            }
          } 
        });
      });
    };
    runAccordion();
});
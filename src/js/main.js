document.addEventListener('DOMContentLoaded', () => {
    //slider
    $('.promo__slider').slick({
      arrows: false,
      dots: true,
      // dotsClass: '.promo__slider-counter',
      appendDots: '.promo__slider-counter',
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
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
          tabContents[i].classList.add('fade');
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
              btn.nextElementSibling.classList.add('db', 'fade');
              btn.parentElement.querySelector('.questions__trigger').classList.add('questions__trigger_active');
            } else {
              btn.classList.remove('act');
              btn.nextElementSibling.classList.remove('db', 'fade');
              btn.parentElement.querySelector('.questions__trigger').classList.remove('questions__trigger_active');
            }
          } 
        });
      });
    };
    runAccordion();

    //mob menu
    const humburger = document.querySelector('.humburger'),
          menu      = document.querySelector('.header__nav'),
          menuItems = document.querySelectorAll('.header__nav-item');

    humburger.addEventListener('click', () => {      
      if(humburger.classList.contains('close')) {
        humburger.classList.remove('close');
        menu.classList.remove('fade');
        menu.classList.add('fadeOut');
        document.body.classList.remove('oh');
        setTimeout(() => {
          menu.classList.remove('header__nav-active');
        },800);
      } else {
        humburger.classList.add('close');
        menu.classList.add('header__nav-active');
        menu.classList.remove('fadeOut');
        menu.classList.add('fade');
        document.body.classList.add('oh');
      }
    });
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
          humburger.classList.remove('close');
          document.body.classList.remove('oh');
          menu.classList.remove('fade');
          menu.classList.add('fadeOut');
          setTimeout(() => {
            menu.classList.remove('header__nav-active');
          },800);
      });
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === "Escape") {
        humburger.classList.remove('close');
        document.body.classList.remove('oh');
        menu.classList.remove('fade');
        menu.classList.add('fadeOut');
        setTimeout(() => {
          menu.classList.remove('header__nav-active');
        },800);
      }
    });

    
});
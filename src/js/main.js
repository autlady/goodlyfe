document.addEventListener("DOMContentLoaded", function () {

  /* ===== отобразить форму поиска по клику на лупу в шапке =====*/
  const headerSearchOpen = document.querySelector('#search-open');
  const headerSearchForm = document.querySelector('#header-search-form');

  headerSearchOpen.addEventListener('click', () => {
    headerSearchForm.classList.toggle('visible');
  });
  
  const toggleMenu = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#header-menu');
  const bodyEl = document.body;
  
  if (toggleMenu) {

    /* клик по иконке гамбургер */
    toggleMenu.addEventListener('click', function(){
         
          if(this.classList.contains('active')){
              this.classList.remove('active');
              mobileMenu.classList.remove('active');
              bodyEl.classList.remove('noscroll');
          }else{
              this.classList.add('active');
              mobileMenu.classList.add('active');
              bodyEl.classList.add('noscroll');
          }
      });

    /* клик по моб меню */
    mobileMenu.addEventListener('click', ()=> {
      toggleMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
      bodyEl.classList.remove('noscroll');
    })
  };

  /* header slider */

  const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.program-slider-next',
      prevEl: '.program-slider-prev',
    },
  
      pagination: {
      el: '.swiper-pagination',
    },
  });

})

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

  const headerSwiper = new Swiper('.header-slider', {
    // Optional parameters
    loop: true,
    speed: 1000,
    effect: "fade",
    lazy: true,
  
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  /* toggle theme color */
  const toggleTheme = document.querySelector('.toggle-theme');
  if(toggleTheme) {
    const toggleThemeInput = toggleTheme.querySelector('.toggle-theme__input');
    toggleTheme.addEventListener('click', ()=> {
      if(toggleThemeInput.checked){
        bodyEl.classList.add('green-theme');
      }
      else{
        bodyEl.classList.remove('green-theme');
      }
    });
  }

   /* back top button */
   const backTop = document.querySelector('.back-top');
   if(backTop) {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 500) {
        backTop.classList.add('back-top--visible');
      }
      else {
        backTop.classList.remove('back-top--visible');
      }
    });
   }
})

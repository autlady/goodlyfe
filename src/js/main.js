document.addEventListener("DOMContentLoaded", function () {

  /* ===== отобразить форму поиска по клику на лупу в шапке =====*/
  const headerSearchOpen = document.querySelector('#search-open');
  const headerSearchForm = document.querySelector('#header-search-form');

  headerSearchOpen.addEventListener('click', () => {
    headerSearchForm.classList.toggle('visible');
  });
  
  const toggleMenu = document.querySelectorAll('.menu-toggle');
  const bodyEl = document.body;
  
  if (toggleMenu) {
    toggleMenu.addEventListener('click', function(){
         
          if(this.classList.contains('active')){
              this.classList.remove('active');
              // asideMenu.classList.remove('active');
              // bodyEl.classList.remove('noscroll');
          }else{
              this.classList.add('active');
              // asideMenu.classList.add('active');
              // bodyEl.classList.add('noscroll');
          }
      });
  };




})

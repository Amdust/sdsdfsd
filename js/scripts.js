new Swiper('.slider__container', {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  
  autoplay:{
    delay: 1500,
    stopOnLastSlide:false,
    disableOnIteraction:false,
  },
  speed:1500,
  breakpoints :{ 
    650:{
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
      speed:1500,
    },
    900:{
      slidesPerView:2.7,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
    }
  }
});

new Swiper('.slider__container-2', {
  slidesPerView: 1,
  loop: true,
  
  autoplay:{
    delay: 1500,
    stopOnLastSlide:false,
    disableOnIteraction:false,
  },
  speed:1500,
  breakpoints :{ 
    650:{
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
      speed:1500,
    },
    900:{
      slidesPerView:2.7,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
    }
  }
});

  const iconMenu = document.querySelector('.burger');
  const menuBody = document.querySelector('.menu__header');
  if(iconMenu){
  iconMenu.addEventListener("click", (e)=> {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('active'),
    menuBody.classList.toggle('menu__header--active')
  })

  }
const navLinks = document.querySelectorAll('.nav__link[data-goto]');
  if(navLinks.length > 0) {
      navLinks.forEach( navLink => {
          navLink.addEventListener("click", onNavLinkClick);
      });
  function onNavLinkClick(e) {
    const navLink = e.target;
    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

      if( iconMenu.classList.contains('active')){
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('menu__header--active')
      }

      window.scrollTo({
          left:0,
          top: gotoBlockValue,
          behavior: "smooth",
      });
          e.preventDefault();
    }
  }
  }
  
//   const anchors = [].slice.call(document.querySelectorAll('a[data-goto]')),
//   animationTime = 300,
//   framesCount = 20;

// anchors.forEach(function(item) {
// // каждому якорю присваиваем обработчик события
// item.addEventListener('click', function(e) {
// // убираем стандартное поведение
// e.preventDefault();

// // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
// let coordY = document.querySelector(item.getAttribute('data-goto')).getBoundingClientRect().top + window.pageYOffset;

// // запускаем интервал, в котором
// let scroller = setInterval(function() {
//   // считаем на сколько скроллить за 1 такт
//   let scrollBy = coordY / framesCount;
  
//   // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//   // и дно страницы не достигнуто
//   if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//     // то скроллим на к-во пикселей, которое соответствует одному такту
//     window.scrollBy(0, scrollBy);
//   } else {
//     // иначе добираемся до элемента и выходим из интервала
//     window.scrollTo(0, coordY);
//     clearInterval(scroller);
//   }
// // время интервала равняется частному от времени анимации и к-ва кадров
// }, animationTime / framesCount);
// });
// });



// for(let anchor of anchors){
//   anchor.addEventListener("click", (event)=> {
//     
//     const blockID = anchor.getAttribute('href')  
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })}
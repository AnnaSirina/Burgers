onePageScroll(".main", {
   sectionContainer: "section",     
   easing: "ease",                   
                                    
   animationTime: 500,             
   pagination: true,                
   updateURL: false,                
   beforeMove: function(index) {},  
   afterMove: function(index) {},   
   loop: false,                     
   keyboard: true,                  
   responsiveFallback: false       
                                     
                                    
});


/*const sections = $(".section");
const display = $(".maincontent");

let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);

const isMobile = md.mobile();

const switchActiveClassInSideMenu = menuItemIndex => {
  $(".fixed-menu__item")
    .eq(menuItemIndex)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

const performTransition = sectionEq => {
  if (inscroll) return;

  const sectionEqNum = parseInt(sectionEq);

  if (!!sectionEqNum === false)
    console.error("не верное значение для аргуемента sectionEq");

  inscroll = true;

  const position = sectionEqNum * -100 + "%";

  sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(() => {
    inscroll = false;
    switchActiveClassInSideMenu(sectionEq);
  }, 1000 + 300); // продолжительность транзишна + 300мс - время для завершения инерции тачустройств
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(".wrapper").on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollToSection("next");
  }
  if (deltaY < 0) {
    scrollToSection("prev");
  }
});

$('.wrapper').on('touchmove', e => {
  e.preventDefault();
});

$(document).on("keydown", e => {
  switch (e.keyCode) {
    case 38:
      scrollToSection("prev");
      break;
    case 40:
      scrollToSection("next");
      break;
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  const target = $(e.currentTarget).attr("data-scroll-to");

  performTransition(target);
});

if (isMobile) {
  $(window).swipe({
    swipe: function(event, direction) {
      const nextOrPrev = direction === "up" ? "next" : "prev";
      scrollToSection(nextOrPrev);
    }
  });
}

/*const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const performTransition = sectionEq => {
  if (inscroll) return;

  const transitionDuration = 1300;
  inscroll = true;
  const position = `${sectionEq * -100}%`;

  sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(() => {
    inscroll = false
  }, transitionDuration);
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.lenght) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.lenght) {
    performTransition(prevSection.index());
  }
}

$(".wrapper").on("wheel", e => {
  const deltaY = e.originalEvent.deltaY; 

  if (deltaY >0) {
    scrollToSection("next");
  }
  if (deltaY <0) {
    scrollToSection("prev");
  }
});*/
const sections = $(".section");
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
});
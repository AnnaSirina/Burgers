
	var slides = document.getElementsByClassName("burger__item"),
	prev = document.querySelector(".prev__arrow"),
	next = document.querySelector(".next__arrow");
	var slideIndex = 1; 
	showElem(slideIndex);
	prev.addEventListener('click', (e) => {
	  e.preventDefault()
	  showElem(slideIndex -=1)
	})
	next.addEventListener('click', (e) => {
	  e.preventDefault()
	  showElem(slideIndex += 1)
	})

	function showElem(n) {
	  var i;
	  if (n > slides.length) {
	      slideIndex = 1
	    }
	    if (n < 1) {
	        slideIndex = slides.length
	    }
	    for (i = 0; i < slides.length; i++) {
	        slides[i].style.display = "none";
	    }
	    slides[slideIndex - 1].style.display = "flex";   
	    
	  }


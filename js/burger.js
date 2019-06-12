
$(function(){
	var 	$slider = $('.container-burger'),
		 	$s = $slider.find(".burger"),
			$sliderLi = $s.find(".burger__item"),
			count = $sliderLi.length,
			$prv = $slider.find(".prev__arrow"),
			$nxt = $slider.find(".next__arrow");
	
	$sliderLi.first().addClass("current");
	
	
	
	$prv.click(
		function(){
			var i =  $s.find('li.current').index();
			if((i - 1) < 0)
				i = count - 1;
			else
				i = i - 1;
			next(i);
		}
	);
	$nxt.click(
		function(){
			move_to_next();
		}
	);
	
	
	
	function move_to_next()
	{
		var i;
		if($s.find("li").last().hasClass("current"))
			i=0;
		else
			i= $s.find("li.current").next().index();
		next(i);
	}
	
		
	function next(i){
			$s.find("li.current").removeClass("current");
			$sliderLi.eq(i).addClass("current");
					
	}	
	
	
});



//var slides = document.getElementsByClassName("burger__item"),
//	prev = document.querySelector(".prev__arrow"),
//	next = document.querySelector(".next__arrow");
//	var slideIndex = 1; 
//	showElem(slideIndex);
	//prev.addEventListener('click', (e) => {
//	  e.preventDefault()
	//  showElem(slideIndex -=1)
//	})
	//next.addEventListener('click', (e) => {
//	  e.preventDefault()
//	  showElem(slideIndex += 1)
//	})

//	function showElem(n) {
	//  var i;
	//  if (n > slides.length) {
	//      slideIndex = 1
	//    }
	//    if (n < 1) {
//	        slideIndex = slides.length
//	    }
	//    for (i = 0; i < slides.length; i++) {
//	        slides[i].style.display = "none";
	//    }
	    //slides[slideIndex - 1].style.display = "flex";   
	    
	 // }


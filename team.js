const el = document.getElementsByClassName('team__item'),
    cont = document.getElementsByClassName('team__hidden');

    for (var i = 0; i < el.length; i++) {
            el[i].addEventListener('click', function() {
                 if (!(this.classList.contains('active'))) {

                     for(var i = 0; i < el.length; i++) {
                        el[i].classList.remove('active');
                         if(this.children.length>1) {
                          this.children[1].style.display = "0";
                           this.children[1].style.overflow = "hidden"; 
                        } else {
                           return false;
                        }

                    }
                    this.classList.add('active');
                    for(var i=0; i<el.length; i++) { 
                    if(this.children.length>1) {
                          this.children[1].style.height = "auto";
                          this.children[1].style.overflow = "visible";
                          
                       } else {
                          return false;
                       }
                      
                    
         }
    
            }
        })
        }

/*

for(var i=0; i<el.length; i++) {
 el[i].addEventListener("mouseenter", showSub, false);
 el[i].addEventListener("mouseleave", hideSub, false);
    
    function showSub(e) {
   if(this.children.length>1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "visible";
      this.children[1].style.opacity = "1";
   } else {
      return false;
   }
}
function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}
}*/
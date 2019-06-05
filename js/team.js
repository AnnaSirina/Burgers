
var accordeon = document.getElementById('team-list');
//открыть\закрыть элемент списка
function openClose(e){

  let _target = e.target.closest("li")
   //есть ли активный элемент
  if (_target.classList.contains("active")) {
    //убрать активный класс
    _target.classList.remove("active")
   } else {
     let _active = document.querySelector(".active")
     
       if (_active) {
          //удалим класс
          _active.classList.remove("active")
           //при клике на пункт меню открыть его спиcок
          _target.classList.add("active")
      }
       _target.classList.add("active")
  }
}
accordeon.addEventListener('click', openClose);


/*const el = document.getElementsByClassName('team__item'),
    cont = document.getElementsByClassName('team__hidden');

    for (var i = 0; i < el.length; i++) {
            el[i].addEventListener('click', function() {
                 if (!(this.classList.contains('active'))) {
                    this.classList.add('active');
                    for(var i=0; i<el.length; i++) { 
                    if(this.children.length>1) {
                          this.children[1].style.height = "auto";
                          this.children[1].style.overflow = "visible";  
                       }
                        else {
                        el[i].classList.remove('active');
                        this.children[1].style.display = "0";
                        this.children[1].style.overflow = "hidden"; 
                       }
                    }
                }
                        
                        
            })
        }

  */          
        


/*
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
*/
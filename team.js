const title = document.getElementsByClassName('team__item'),
    cont = document.getElementsByClassName('team__hidden');

    for (var i = 0; i < title.length; i++) {
            title[i].addEventListener('click', function() {
                 if (!(this.classList.contains('active'))) {

                     for(var i = 0; i < title.length; i++) {
                        title[i].classList.remove('active');
                    }
                    this.classList.add('active');
                    
                    if (this.classList.contains('active')) {
                        for (var j = 0; j < cont.length; j++) 
                        cont[j].classList.add('active');
                    } else {
                        cont[j].classList.remove('active');
                    }
                
                
         }
    
            })
        }
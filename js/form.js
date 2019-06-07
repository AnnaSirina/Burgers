
	const form = document.querySelector('#myForm');
	const modal = document.getElementById('myModal');	
	const span = document.getElementsByClassName("model__close")[0];

	form.addEventListener('submit', event => {
		event.preventDefault();
		modal.style.display = "block";
		document.body.style.overflow = 'hidden';
		let formData = new FormData();
		formData.append("name", form.elements.name.value);
		formData.append("phone", form.elements.phone.value);
		formData.append("comment", form.elements.comment.value);
		formData.append("to", "sirina.anya@gmail.com");

		let url = "https://webdev-api.loftschool.com/sendmail";

		const xhr = new XMLHttpRequest();
		xhr.responseType = "json";
		xhr.open("POST", url);
		xhr.setRequestHeader("X-Requested-With", "XMLHTTPRequest");
		xhr.send(formData);

		span.onclick = function() {
    	modal.style.display = "none";

		}

		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		     } 
		     document.body.style.overflow = 'visible';
		}



		xhr.onreadystatechange = function() { 
  			if (xhr.readyState != 4) return;
 				console.log('Загрузилось на сервер')
  			if (xhr.status != 200) {
    			alert('Нам очень жаль, но что-то пошло не так. Повторите заказ!');
  			} else {
    			console.log('Все ок');
  			}
		}

		console.log('Загружаю...');
	
})




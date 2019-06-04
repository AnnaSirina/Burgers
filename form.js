
	const form = document.querySelector('#myForm');
		

	form.addEventListener('submit', event => {
		event.preventDefault();
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

		xhr.onreadystatechange = function() { 
  			if (xhr.readyState != 4) return;
 				console.log('Загрузилось на сервер')
  			if (xhr.status != 200) {
    			alert('Нам очень жаль, но что-то пошло не так. Повторите заказ!');
  			} else {
    			alert('Спасибо, Ваш заказ принят! ');
  			}
		}

		console.log('Загружаю...'); 


		
})


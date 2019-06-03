/*<script>
			const myForm = document.querySelector('#myForm');
			const sendbtn = document.querySelector('#SendButton');
			const field = document.querySelector('order__contact');

			sendbtn.addEventListener('click', event => {
				event.preventDefault();
				console.log(myForm.elements.name.value);
				console.log(myForm.elements.phone.value);
				console.log(myForm.elements.comment.value);

				if (validateForm(myForm)) {
					console.log('Данные заполнены');
				} else {
					alert('Заполните, пожалуйста, все поля формы!')
				}
			});

			function validateForm(form) {
				let valid = true; 

				if (!validateField(form.elements.name)) {
					valid = false; 
				}
				if (!validateField(form.elements.phone)) {
					valid = false; 
				}
				if (!validateField(form.elements.comment)) {
					valid = false; 
				}
				return valid;
			}

			function validateField(field) {
				if (!field.checkValidity()) {
					field.nextElementSibling.TextContent = field.ValidationMessage;
					return false; 
				} else {
					field.nextElementSibling.TextContent = '' ;
				return true;
			}
				
					
			}
		</script>
		*/
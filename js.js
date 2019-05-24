const blockList = document.querySelector('.menu__list')
			blockList.addEventListener('click', function(e) {
				if (e.target.className === '.menu__title') {
					console.log(e.target);
				}
			})


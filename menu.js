const blockList = document.querySelector('.menu__list');
	blockList.addEventListener('click', function (e) {
		if (e.target.className === 'menu__title') {
			e.target.parentElement.classList.toggle('active')
			const itemId = localStorage.getItem('itemId')
			localStorage.setItem('itemId', e.target.parentElement.id)

			if (itemId != e.target.parentElement.id) {
				document.getElementById(itemId).classList.remove('active')
				localStorage.removeItem('itemId')
				localStorage.setItem('itemId', e.target.parentElement.id)
			}

			if (window.innerWidth <= 480 && e.target.parentElement.classList.contains('active')) {
                if (!e.target.parentElement.previousElementSibling) {
                    console.log('object')
                    blockList.style.transform = 'translateX(114px)'
                } else if (!e.target.parentElement.nextElementSibling) {
                    console.log('object')
                    blockList.style.transform = 'translateX(0)'
                } else {
                    blockList.style.transform = 'translateX(57px)'
                }
                e.target.nextElementSibling.style.width = `${window.innerWidth - 57}px`;
            } else {
                blockList.style.transform = 'translateX(0)'
            }
        }

})




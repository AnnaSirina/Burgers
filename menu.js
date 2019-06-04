const calculateWidth = () => {
    const wWidth = screen.width;
    const titles = document.querySelector('.menu__title');
    const titleWidth = getComputedStyle(titles).width;
    const reqWidth = wWidth - titleWidth;
    console.log(titles.length);

    return (reqWidth > 550) ? 550 : reqWidth
  }

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
    const reqWidth = calculateWidth()


if (window.innerWidth <= reqWidth && e.target.parentElement.classList.contains('active')) {
                if (!e.target.parentElement.previousElementSibling) {
                    
                    blockList.style.transform = 'translateX(50px)'
                } else if (!e.target.parentElement.nextElementSibling) {
                    
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



 
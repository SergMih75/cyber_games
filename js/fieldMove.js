let fieldJs = document.querySelectorAll('.field-js')

document.addEventListener('scroll', () => {
	fieldJs.forEach(item => {
		if (
			item.getBoundingClientRect().top < innerHeight / 2 &&
			item.getBoundingClientRect().top > 0 &&
			!item.classList.contains('field-js-move')
		) {
			item.classList.add('field-js-move')
		}
		if (
			item.getBoundingClientRect().top > innerHeight + 5 &&
			item.classList.contains('field-js-move')
		) {
			item.classList.remove('field-js-move')
		}
	})
})

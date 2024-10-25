const searchInput = document.querySelector('.search__input')
const searchBtn = document.querySelector('.btn-search')
const products = document.querySelector('.products')

const cards = [
	{
		id: 0,
		img: './img/Card-img.png',
		title: 'Первый',
		price: '170 ₽',
		descriptionOne: 'Казань, р-н Вахитовский',
		descriptionTwo: '10 июля 11:39',
	},
	{
		id: 1,
		img: './img/Card-img.png',
		title: 'Пвх материал 2й сорт',
		price: '170 ₽',
		descriptionOne: 'Казань, р-н Вахитовский',
		descriptionTwo: '10 июля 11:39',
	},
	{
		id: 2,
		img: './img/Card-img.png',
		title: 'Второй',
		price: '170 ₽',
		descriptionOne: 'Казань, р-н Вахитовский',
		descriptionTwo: '10 июля 11:39',
	},
	{
		id: 3,
		img: './img/Card-img.png',
		title: 'Третий',
		price: '171 ₽',
		descriptionOne: 'Казань, р-н Вахитовский',
		descriptionTwo: '440 июля 11:39',
	},
	{
		id: 4,
		img: './img/Card-img.png',
		title: 'Пвх материал 2й сорт',
		price: '170 ₽',
		descriptionOne: 'Казань, р-н Вахитовский',
		descriptionTwo: '18 июля 11:39',
	},
	{
		id: 5,
		img: './img/Card-img.png',
		title: 'Пвх материал 2й сорт',
		price: '178 ₽',
		descriptionOne: 'Казань, р-н Вахитовский',
		descriptionTwo: '31 июля 11:39',
	},
]

function render(array) {
	array.forEach(element => {
		products.insertAdjacentHTML(
			'beforeend',
			`<div class="products__item">
			<div class="products__item--img">
				<img src="${element.img}" alt="Товар">
			</div>
			<h5 class="products__item--title">${element.title}</h5>
			<p class="products__item--price">${element.price}</p>
			<span class="products__item--description">${element.descriptionOne}</span>
			<span class="products__item--description">${element.descriptionTwo}</span>
		</div>
        `
		)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	render(cards)
})

searchBtn.addEventListener('click', () => {
	products.innerHTML = ''
	let filterCard = cards.filter(
		item =>
			item.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
			item.price.includes(searchInput.value)
	)

	if (filterCard.length > 0) {
		render(filterCard)
	} else {
		products.innerHTML = 'Подходящего товара не найдено'
	}
})

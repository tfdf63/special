export interface Card {
	id: number
	image: string
	title: string
	url: string
}

export const cardsData: Card[] = [
	{
		id: 1,
		image: '/images/cards/1.jpg',
		title: 'Опен-колл для иллюстраторов и\u00A0художников',
		url: '/project/cards/1',
	},
	{
		id: 2,
		image: '/images/cards/2.jpeg',
		title: 'Постеры «А\u00A0что ты\u00A0знаешь про\u00A0Акрон?»',
		url: '/project/cards/2',
	},
	{
		id: 3,
		image: '/images/cards/3.jpg',
		title: 'Библиотека клуба «Акрон» в\u00A0«Автограде»',
		url: '/project/cards/3',
	},
	{
		id: 4,
		image: '/images/cards/4.jpg',
		title: 'Матчевые плакаты с\u00A0художниками',
		url: '/project/cards/4',
	},
	{
		id: 5,
		image: '/images/cards/5.jpg',
		title: 'Реставрация вывески «Волна»',
		url: '/project/cards/5',
	},
]

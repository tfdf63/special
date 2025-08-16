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
		title: 'Серия постеров «А что ты знаешь про Акрон?»',
		url: '/project/cards/1',
	},
	{
		id: 2,
		image: '/images/cards/2.jpg',
		title: 'Матчевые плакаты с художниками',
		url: '/project/cards/2',
	},
]

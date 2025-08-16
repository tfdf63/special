import { processProjectCard, type ProjectCard } from '../utils/dataProcessor'

// Исходные данные проектов
const rawProjectCards: ProjectCard[] = [
	{
		id: 1,
		title: 'Серия постеров<br/>«А что ты знаешь про Акрон?»',
		content: [
			{
				type: 'text',
				content: [
					'Выпустили серию просветительских постеров про советский модернизм на Волге. Короткие информационные справки привлекают внимание к архитектурным единицам Самары и Тольятти, а также знакомит вас с Акроном.',
					'Постеры можно встретить на улице, в барах, кафе и культурных институциях в Тольятти и в Самаре.',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/1.png',
					'/images/projects/2.png',
					'/images/projects/11.jpeg',
					'/images/projects/22.jpeg',
				],
			},
		],
	},
	{
		id: 2,
		title: 'Матчевые постеры',
		content: [
			{
				type: 'text',
				content: [
					'Искусство как футбол — захватывает дух и непредсказуемо. К каждому домашнему матчу Акрона привлекаем художников и иллюстраторов для создания самобытной афиши-постера. Идея удостоилась премии «Winline Герои РПЛ» в номинации «Мерч сезона» в 2025 году.',
					'Участие в создании постеров принимали авторы из Тольятти, Самары и других городов: Юля Завтур, Сева Выводцев, Михаил Качикаракис, Юля Чиж, Eelya Coeur, Катя Симачёва, Юлия Сиротина, Таня Боброва, pech0ng, Паша Жирков, Валерий Зарытовский, Вася Кармазин, Ksusha ITWAZCOOL и другие.',
					'Приобрести можно в&nbsp;<a href="https://shop.fcakron.ru/catalog/atributika/" target="_blank" rel="noopener noreferrer">онлайн-магазине</a>',
					'Если ты хочешь изготовить постер, оставляй <a href="https://forms.yandex.ru/u/685aa26e02848fd787b0ed0f/" target="_blank" rel="noopener noreferrer">заявку тут</a>',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/posters/poster1.jpg',
					'/images/projects/posters/poster2.jpeg',
					'/images/projects/posters/poster3.jpeg',
					'/images/projects/posters/poster4.jpeg',
					'/images/projects/posters/poster5.jpeg',
					'/images/projects/posters/poster6.jpeg',
					'/images/projects/posters/poster7.jpeg',
					'/images/projects/posters/poster8.jpeg',
					'/images/projects/posters/poster9.jpg',
					'/images/projects/posters/poster10.png',
					'/images/projects/posters/poster11.png',
					'/images/projects/posters/poster12.jpg',
				],
			},
		],
	},
	// {
	// 	id: 3,
	// 	title: 'Создание веб-платформы для&nbsp;электронной коммерции',
	// 	content: [
	// 		{
	// 			type: 'text',
	// 			content: [
	// 				'Полнофункциональная веб-платформа для&nbsp;ведения электронной коммерции, включающая в&nbsp;себя каталог товаров, корзину покупок, систему оплаты и&nbsp;управления заказами.',
	// 				'Платформа разработана с&nbsp;учетом современных требований к&nbsp;безопасности, производительности и&nbsp;удобству использования для&nbsp;клиентов и&nbsp;администраторов.',
	// 			],
	// 		},
	// 		{
	// 			type: 'heading',
	// 			content: 'Технические характеристики',
	// 		},
	// 		{
	// 			type: 'slider',
	// 			content: ['/images/projects/1.png', '/images/projects/2.png'],
	// 		},
	// 		{
	// 			type: 'subheading',
	// 			content: 'Безопасность и&nbsp;надежность',
	// 		},
	// 		{
	// 			type: 'text',
	// 			content: [
	// 				'Реализованы современные протоколы безопасности для&nbsp;защиты персональных данных клиентов и&nbsp;финансовых транзакций.',
	// 				'Система обеспечивает высокую доступность и&nbsp;отказоустойчивость, что критично для&nbsp;коммерческих проектов.',
	// 			],
	// 		},
	// 	],
	// },
]

// Экспортируем предварительно обработанные данные
export const projectCardsData = rawProjectCards.map(processProjectCard)

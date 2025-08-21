import { processProjectFuture } from '../utils/dataProcessor'
import { ProjectFuture } from '../utils/dataProcessor'

// Исходные данные будущих проектов
const rawProjectFuturs: ProjectFuture[] = [
	{
		id: 1,
		title: 'Мерч «Простые вещи»',
		content: [
			{
				type: 'text',
				content: [
					'При поддержке ДоброFON инклюзивные мастерские «Простые вещи» создали для «Акрона» коллекцию практичных сувениров. Вместе с\u00A0мастерами, ребятами с\u00A0ментальными особенностями и\u00A0волонтёрами мы\u00A0выпустили капитанские повязки, стикер-паки, открытки, матчевые постеры с\u00A0рамками, мыло, подставки для телефонов и\u00A0картхолдеры.',
					'Приобрести можно в\u00A0<a href="https://shop.fcakron.ru/catalog/collection/" target="_blank" rel="noopener noreferrer">онлайн-магазине</a>',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/simplething/1.jpeg',
					'/images/projects/simplething/2.jpeg',
					'/images/projects/simplething/3.jpeg',
					'/images/projects/simplething/4.jpeg',
					'/images/projects/simplething/5.jpeg',
					'/images/projects/simplething/6.jpeg',
				],
			},
		],
	},
	{
		id: 2,
		title: 'Матчевый плакат с\u00A0фондом «Антон тут рядом»',
		content: [
			{
				type: 'text',
				content: [
					'Автором графики матчевого постера «Акрон — Ростов от\u00A031 марта 2025 года) стал Сергей Тиснек, студент фонда «Антон тут рядом», который помогает аутичным людям в\u00A0России.',
					'Серёжа стал одним из\u00A0первых участником программ фонда. Он\u00A0освоил технику линогравюры и\u00A0начал делать коллажи-открытки. Работы художника выставляются в\u00A0Государственном Эрмитаже, Русском музее, Рихтере и\u00A0музее-заповеднике «Царицыно».',
					'Искусство — это изображение жизни, по\u00A0мнению Серёжи. И\u00A0мы\u00A0согласны с\u00A0этим.',
				],
			},
			{
				type: 'slider',
				content: ['/images/projects/futurs/3.png'],
			},
		],
	},
	{
		id: 3,
		title: 'Муралы в\u00A0Тольятти',
		content: [
			{
				type: 'subheading',
				content: 'Дзюба',
			},
			{
				type: 'text',
				content: [
					'В\u00A0честь исторического достижения Артёма Дзюбы в\u00A0городе появился масштабный мурал. На\u00A0фоне Жигулёвских гор изображена монументальная фигура футболиста, вдохновляющая юных игроков на\u00A0поле. Работа выполнена в\u00A0фирменных цветах «Акрона» и\u00A0расположена по\u00A0адресу: Тольятти, улица Ульяны Громовой, 14.',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/futurs/3_1_1.jpeg',
					'/images/projects/futurs/3_1_2.jpeg',
					'/images/projects/futurs/3_1_3.jpeg',
					'/images/projects/futurs/3_1_4.jpeg',
					'/images/projects/futurs/3_1_5.jpeg',
				],
			},
			{
				type: 'subheading',
				content: 'Юбилейная коллаборация с\u00A0NOOTK',
			},
			{
				type: 'text',
				content: [
					'К\u00A0пятилетию «Акрона» совместно с\u00A0художником NOOTK создали новый арт-объект в\u00A0Тольятти. На\u00A0стене по\u00A0адресу Мира, 117 появился мурал, воплотивший ценности клуба и\u00A0города: страсть к\u00A0футболу, преданность болельщиков и\u00A0трудовую доблесть тольяттинцев. Эта работа — художественное осмысление истории не\u00A0только команды, но\u00A0и\u00A0всего промышленного холдинга, стоящего за\u00A0ней.',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/futurs/3_2_1.jpeg',
					'/images/projects/futurs/3_2_2.jpeg',
					'/images/projects/futurs/3_2_3.jpeg',
					'/images/projects/futurs/3_2_4.jpeg',
				],
			},
			{
				type: 'subheading',
				content:
					'Акрон в\u00A0искусстве: командный успех на\u00A0стенах города',
			},
			{
				type: 'text',
				content: [
					'В\u00A0честь исторического выхода команды в\u00A0РПЛ в\u00A0Тольятти появился новое монументальное изображение на\u00A0улице Баныкина, 56. Мурал символизирует коллективный путь к\u00A0успеху: здесь и\u00A0футболист, и\u00A0тренерский штаб, и\u00A0сотрудники клуба, и\u00A0преданные болельщики.',
					'Этот мурал — художественное воплощение философии «Акрона», где важна каждая составляющая: профессиональный подход, командный дух и\u00A0безграничная поддержка фанатов. Создано иллюстратором Севой Выводцевым.',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/futurs/3_3_1.jpeg',
					'/images/projects/futurs/3_3_2.jpeg',
					'/images/projects/futurs/3_3_3.jpeg',
					'/images/projects/futurs/3_3_4.jpeg',
				],
			},
		],
	},
	{
		id: 4,
		title: 'МЕЧ х\u00A0АКРОН',
		content: [
			{
				type: 'text',
				content: [
					'Коллаборация с\u00A0московским стритвир-брендом МЕЧ — это функциональная одежда, созданная для повседневной жизни и\u00A0поддержки команды. В\u00A0коллекции: футболки, бейсболки, утепленные худи, флиски, сумки и\u00A0шарфы в\u00A0фирменных цветах клуба. Минималистичный дизайн, комфорт и\u00A0качество — без лишних деталей. Приобрести можно <a href="https://shop.fcakron.ru/catalog/odezhda/?collection%5B%5D=74&PAGEN_1=1" target="_blank" rel="noopener noreferrer">по\u00A0ссылке</a>',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/futurs/4_1.jpeg',
					'/images/projects/futurs/4_2.jpeg',
					'/images/projects/futurs/4_3.jpeg',
					'/images/projects/futurs/4_4.jpeg',
					'/images/projects/futurs/4_5.jpeg',
					'/images/projects/futurs/4_6.jpeg',
					'/images/projects/futurs/4_7.jpeg',
					'/images/projects/futurs/4_8.jpeg',
				],
			},
		],
	},
	{
		id: 5,
		title: 'Коллекция «Гербарий»',
		content: [
			{
				type: 'text',
				content: [
					'В\u00A0коллаборации с\u00A0брендом «Гербарий» представляем яркую коллекцию футболок с\u00A0цветочным принтом в\u00A0насыщенном красном цвете. К\u00A0каждой футболке прилагаются объёмные стикеры с\u00A0изображением эндемиков Жигулёвского заповедника. Главные герои коллекции — редкие растения Самарской области: нежная ясколка и\u00A0выносливый качим. Приобрести можно <a href="https://shop.fcakron.ru/" target="_blank" rel="noopener noreferrer">по\u00A0ссылке</a>',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/futurs/5_1.jpeg',
					'/images/projects/futurs/5_2.jpeg',
					'/images/projects/futurs/5_3.jpeg',
					'/images/projects/futurs/5_4.jpeg',
					'/images/projects/futurs/5_5.jpeg',
					'/images/projects/futurs/5_6.jpeg',
				],
			},
		],
	},
	{
		id: 6,
		title: 'THE DAWLESS — Вместе до\u00A0конца',
		content: [
			{
				type: 'text',
				content: [
					'Группа THE DAWLESS записала бодрый трек, посвящённый фанатскому коммьюнити футбольного клуба «Акрон». В\u00A0клипе знакомые образы родного Тольятти, драйв игры и\u00A0фанатский дух.',
				],
			},
			{
				type: 'text',
				content: [
					'<iframe src="https://vk.com/video_ext.php?oid=-175141666&id=456242512&hd=3&autoplay=1" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>',
				],
			},
		],
	},
	{
		id: 7,
		title: 'Золотые Зубы — «Э.В.А»',
		content: [
			{
				type: 'text',
				content: [
					'Тольяттинская группа «Золотые зубы» представила трек «Это всё Акрон». В\u00A0песне звучит дух города, страсть к\u00A0футболу и\u00A0особая энергетика молодого сообщества.',
					'Это больше чем песня — это искреннее признание в\u00A0любви родному краю через призму футбольных эмоций. Трек уже стал неофициальным гимном всех, кто живёт и\u00A0дышит футболом в\u00A0Тольятти.',
				],
			},
			{
				type: 'text',
				content: [
					'<iframe src="https://vk.com/video_ext.php?oid=-175141666&id=456241814&hd=3&autoplay=1" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>',
				],
			},
			{
				type: 'text',
				content: [
					'<iframe src="https://vk.com/video_ext.php?oid=-175141666&id=456241814&autoplay=1" width="100%" height="240" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>',
				],
			},
		],
	},
	{
		id: 8,
		title: 'Коллекция «Тольятти»',
		content: [
			{
				type: 'text',
				content: [
					'Вместе с\u00A0художником Севой Выводцевым мы\u00A0создали особую коллекцию, вдохновлённую духом Тольятти. Каждая вещь — это отражение идентичности вечно молодого города, его истории и\u00A0энергии. В\u00A0линейке предметы, которые рассказывают нашу общую историю. Советский модернизм встречается с\u00A0современностью — ваш новый стиль уже ждёт вас. Приобрести можно <a href="https://shop.fcakron.ru/" target="_blank" rel="noopener noreferrer">по\u00A0ссылке</a>',
				],
			},
			{
				type: 'slider',
				content: [
					'/images/projects/futurs/8_1.jpeg',
					'/images/projects/futurs/8_2.jpeg',
					'/images/projects/futurs/8_3.jpeg',
					'/images/projects/futurs/8_4.jpeg',
					'/images/projects/futurs/8_5.jpeg',
					'/images/projects/futurs/8_6.jpeg',
				],
			},
		],
	},
	{
		id: 71,
		title: 'Разработка экосистемы для&nbsp;интернета вещей',
		content: [
			{
				type: 'text',
				content: [
					'Комплексная экосистема для&nbsp;управления и&nbsp;мониторинга устройств интернета вещей, обеспечивающая безопасное подключение, сбор данных и&nbsp;удаленное управление различными устройствами.',
					'Система разработана с&nbsp;учетом современных требований к&nbsp;безопасности и&nbsp;масштабируемости, поддерживает различные протоколы связи и&nbsp;типы устройств.',
				],
			},
			{
				type: 'heading',
				content: 'Архитектура системы',
			},
			{
				type: 'slider',
				content: ['/images/projects/1.png', '/images/projects/2.png'],
			},
			{
				type: 'subheading',
				content: 'Безопасность и&nbsp;приватность',
			},
			{
				type: 'text',
				content: [
					'Реализованы современные протоколы безопасности для&nbsp;защиты персональных данных клиентов и&nbsp;финансовых транзакций.',
					'Система обеспечивает высокую доступность и&nbsp;отказоустойчивость, что критично для&nbsp;коммерческих проектов.',
				],
			},
		],
	},
]

// Экспортируем предварительно обработанные данные
export const projectFutursData = rawProjectFuturs.map(processProjectFuture)

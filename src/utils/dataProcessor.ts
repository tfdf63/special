import { processHeading, processText } from './textProcessing'

export interface ContentBlock {
	type: 'text' | 'heading' | 'slider' | 'subheading'
	content: string | string[]
	level?: 2 | 3
}

export interface ProcessedContentBlock {
	type: 'text' | 'heading' | 'slider' | 'subheading'
	content: string | string[]
	level?: 2 | 3
	processedContent?: string | string[] // Добавляем обработанный контент
}

export interface ProjectCard {
	id: number
	title: string
	content: ContentBlock[]
}

export interface ProjectFuture {
	id: number
	title: string
	content: ContentBlock[]
}

// Функция для обработки одного блока контента
function processContentBlock(block: ContentBlock): ProcessedContentBlock {
	switch (block.type) {
		case 'text':
			if (Array.isArray(block.content)) {
				return {
					...block,
					processedContent: block.content.map(text => processText(text)),
				}
			}
			return {
				...block,
				processedContent: processText(block.content as string),
			}

		case 'heading':
		case 'subheading':
			return {
				...block,
				processedContent: processHeading(block.content as string),
			}

		case 'slider':
			// Для слайдера контент остается как есть (пути к изображениям)
			return block

		default:
			return block
	}
}

// Функция для обработки карточки проекта
export function processProjectCard(card: ProjectCard) {
	return {
		...card,
		title: processHeading(card.title),
		content: card.content.map(processContentBlock),
	}
}

// Функция для обработки будущего проекта
export function processProjectFuture(project: ProjectFuture) {
	return {
		...project,
		title: processHeading(project.title),
		content: project.content.map(processContentBlock),
	}
}

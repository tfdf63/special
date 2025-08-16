import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.scss'
import { Card as CardType } from '../../data/cards'

interface CardProps {
	card: CardType
}

const Card: React.FC<CardProps> = ({ card }) => {
	return (
		<Link href={card.url} className={styles.card}>
			<div className={styles.imageContainer}>
				<Image
					src={card.image}
					alt={card.title}
					width={463}
					height={463}
					className={styles.image}
				/>
			</div>
			<h3 className={styles.title}>{card.title}</h3>
		</Link>
	)
}

export default Card

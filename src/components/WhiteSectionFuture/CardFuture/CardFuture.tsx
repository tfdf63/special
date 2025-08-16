import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CardFuture.module.scss'
import { CardFuture as CardFutureType } from '@/data/cardfuturs'

interface CardFutureProps {
	card: CardFutureType
}

const CardFuture: React.FC<CardFutureProps> = ({ card }) => {
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

export default CardFuture

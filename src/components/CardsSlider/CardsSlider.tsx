'use client'

import React, { forwardRef } from 'react'
import Card from '../Card'
import styles from './CardsSlider.module.scss'
import { cardsData } from '../../data/cards'

const CardsSlider = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div className={styles.sliderContainer}>
			<div className={styles.slider} ref={ref}>
				{cardsData.map(card => (
					<div key={card.id} className={styles.cardWrapper}>
						<Card card={card} />
					</div>
				))}
			</div>
		</div>
	)
})

CardsSlider.displayName = 'CardsSlider'

export default CardsSlider

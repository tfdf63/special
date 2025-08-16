'use client'

import React, { forwardRef } from 'react'
import CardFuture from '../CardFuture'
import styles from './CardsSliderFuture.module.scss'
import { cardFutursData } from '../../../data/cardfuturs'

const CardsSliderFuture = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div className={styles.sliderContainer}>
			<div className={styles.slider} ref={ref}>
				{cardFutursData.map(card => (
					<div key={card.id} className={styles.cardWrapper}>
						<CardFuture card={card} />
					</div>
				))}
			</div>
		</div>
	)
})

CardsSliderFuture.displayName = 'CardsSliderFuture'

export default CardsSliderFuture

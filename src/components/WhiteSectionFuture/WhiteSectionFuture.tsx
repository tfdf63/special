'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './WhiteSectionFuture.module.scss'
import CardsSliderFuture from './CardsSliderFuture'
import { cardFutursData } from '../../data/cardfuturs'

const WhiteSectionFuture = () => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const totalCards = cardFutursData.length // динамическое количество карточек
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 767)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)

		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const scrollLeft = () => {
		if (sliderRef.current && currentIndex > 0) {
			const cardWidth = isMobile ? 230 + 15 : 463 + 60 // мобильная: 230px + 15px gap, десктоп: 463px + 60px gap

			sliderRef.current.scrollTo({
				left: (currentIndex - 1) * cardWidth,
				behavior: 'smooth',
			})
			setCurrentIndex(currentIndex - 1)
		}
	}

	const scrollRight = () => {
		// На ПК показываем 3 карточки, на мобильной 1.5
		const maxIndex = isMobile ? totalCards - 1 : totalCards - 3

		if (sliderRef.current && currentIndex < maxIndex) {
			const cardWidth = isMobile ? 230 + 15 : 463 + 60 // мобильная: 230px + 15px gap, десктоп: 463px + 60px gap

			sliderRef.current.scrollTo({
				left: (currentIndex + 1) * cardWidth,
				behavior: 'smooth',
			})
			setCurrentIndex(currentIndex + 1)
		}
	}

	return (
		<section className={styles.whiteSection}>
			<div className={styles.content}>
				<div className={styles.headerSection}>
					<button
						className={`${styles.arrowButton} ${
							currentIndex === 0 ? styles.disabled : ''
						}`}
						onClick={scrollLeft}
						aria-label='Предыдущая'
						disabled={currentIndex === 0}
					>
						<Image
							src='/images/arrows/left.png'
							alt='Стрелка влево'
							width={37}
							height={39}
							className={styles.arrowImage}
						/>
					</button>
					<h2 className={styles.sectionTitle}>ЧТО СДЕЛАЛИ</h2>
					<button
						className={`${styles.arrowButton} ${
							currentIndex >= (isMobile ? totalCards - 1 : totalCards - 3)
								? styles.disabled
								: ''
						}`}
						onClick={scrollRight}
						aria-label='Следующая'
						disabled={
							currentIndex >= (isMobile ? totalCards - 1 : totalCards - 3)
						}
					>
						<Image
							src='/images/arrows/right.png'
							alt='Стрелка вправо'
							width={37}
							height={39}
							className={styles.arrowImage}
						/>
					</button>
				</div>
				<CardsSliderFuture ref={sliderRef} />
			</div>
		</section>
	)
}

export default WhiteSectionFuture

'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Ticker.module.scss'

interface TickerProps {
	speed?: number // скорость в пикселях в секунду
}

const Ticker: React.FC<TickerProps> = ({ speed = 50 }) => {
	const [position, setPosition] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition(prev => {
				const newPosition = prev - speed / 60 // делим на 60 для 60fps
				// Сбрасываем позицию когда элемент полностью ушел влево
				if (newPosition < -1000) {
					return 0
				}
				return newPosition
			})
		}, 1000 / 60) // 60fps

		return () => clearInterval(interval)
	}, [speed])

	return (
		<div className={styles.ticker}>
			<div
				className={styles.tickerContent}
				style={{ transform: `translateX(${position}px)` }}
			>
				{/* Дублируем контент для бесшовной анимации */}
				{Array.from({ length: 10 }).map((_, index) => (
					<div key={index} className={styles.tickerItem}>
						<div className={styles.logoContainer}>
							<Image
								src='/images/logo3.png'
								alt='Логотип АКРОН'
								width={56}
								height={56}
								className={styles.logo}
								priority
							/>
						</div>
						<span className={styles.text}>ХОЧУ НА МАТЧ АКРОНА</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Ticker

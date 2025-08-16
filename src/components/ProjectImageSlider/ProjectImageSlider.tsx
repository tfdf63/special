'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './ProjectImageSlider.module.scss'

interface ProjectImageSliderProps {
	images: string[]
}

const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({ images }) => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
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
			const newIndex = currentIndex - 1
			const scrollPosition = isMobile
				? newIndex * (256.3323669433594 + 15) // mobile: image width + gap
				: newIndex * (791.5 + 20) // desktop: 791.5px (50% of 1583px) + 20px gap

			sliderRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth',
			})
			setCurrentIndex(newIndex)
		}
	}

	const scrollRight = () => {
		if (sliderRef.current && currentIndex < images.length - 1) {
			const newIndex = currentIndex + 1
			const scrollPosition = isMobile
				? newIndex * (256.3323669433594 + 15) // mobile: image width + gap
				: newIndex * (791.5 + 20) // desktop: 791.5px (50% of 1583px) + 20px gap

			sliderRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth',
			})
			setCurrentIndex(newIndex)
		}
	}

	if (images.length === 0) return null

	// Если только одно изображение
	if (images.length === 1) {
		return (
			<div className={styles.sliderContainer}>
				<div className={styles.singleImageContainer}>
					<Image
						src={images[0]}
						alt='Изображение проекта'
						width={800}
						height={1097}
						className={styles.image}
					/>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.slider} ref={sliderRef}>
				{images.map((image, index) => (
					<div key={index} className={styles.imageWrapper}>
						<Image
							src={image}
							alt={`Изображение проекта ${index + 1}`}
							width={800}
							height={1097}
							className={styles.image}
						/>
					</div>
				))}
			</div>

			{/* Стрелки навигации */}
			<div className={styles.arrowsContainer}>
				<button
					className={`${styles.arrowButton} ${
						currentIndex === 0 ? styles.disabled : ''
					}`}
					onClick={scrollLeft}
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

				<button
					className={`${styles.arrowButton} ${
						currentIndex === images.length - 1 ? styles.disabled : ''
					}`}
					onClick={scrollRight}
					disabled={currentIndex === images.length - 1}
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
		</div>
	)
}

export default ProjectImageSlider

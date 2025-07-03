import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'

const MatchesPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				{/* Мобильное изображение */}
				<Image
					src='/images/mob.png'
					alt='Мобильная версия'
					width={400}
					height={300}
					className={styles.mobileImage}
				/>
				{/* Десктопное изображение */}
				<Image
					src='/images/pc.jpg'
					alt='Десктопная версия'
					width={800}
					height={600}
					className={styles.desktopImage}
				/>
			</div>
		</div>
	)
}

export default MatchesPage

import React from 'react'
import Image from 'next/image'
import styles from './Main.module.scss'

const Main = () => {
	return (
		<main className={styles.main}>
			<div className={styles.backgroundImage}>
				{/* Мобильное фоновое изображение */}
				<Image
					src='/images/main/bg2.jpg'
					alt='Фоновая картинка мобильная'
					fill
					className={styles.bgImageMobile}
					priority
				/>
				{/* Десктопное фоновое изображение */}
				<Image
					src='/images/main/bg.jpg'
					alt='Фоновая картинка десктоп'
					fill
					className={styles.bgImageDesktop}
					priority
				/>
				<div className={styles.overlayDark}></div>
			</div>

			{/* Мобильный оверлей */}
			<div className={styles.mobileOverlay}></div>

			<div className={styles.content}>
				<h1 className={styles.title}>
					Акрон — молодой и звонкий
					<br />
					футбольный клуб из Тольятти
				</h1>
			</div>
		</main>
	)
}

export default Main

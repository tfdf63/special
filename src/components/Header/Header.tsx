import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<div className={styles.logoWrapper}>
					{/* Вращающийся внешний логотип */}
					<svg
						className={styles.logoT}
						viewBox='0 0 100 100'
						style={{ fill: '#d8c4e5' }}
					>
						<use href='/images/logoT.svg' />
					</svg>

					{/* Статичный центральный логотип */}
					<svg
						className={styles.logoA}
						viewBox='0 0 100 100'
						style={{ fill: '#d8c4e5' }}
					>
						<use href='/images/logoA.svg' />
					</svg>
				</div>
			</div>
		</header>
	)
}

export default Header

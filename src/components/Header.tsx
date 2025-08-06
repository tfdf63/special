import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Image
					src='/images/logo.png'
					alt='Логотип ФК АКРОН'
					width={100}
					height={100}
					className={styles.logo}
				/>
			</div>
		</header>
	)
}

export default Header

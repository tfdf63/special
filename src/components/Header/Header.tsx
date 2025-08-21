'use client'

import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<div className={styles.logoWrapper}>
					{/* Вращающийся внешний логотип */}
					<Image
						src='/images/logoT.svg'
						alt='Внешний логотип АКРОН'
						width={45}
						height={45}
						className={styles.logoT}
					/>

					{/* Статичный центральный логотип */}
					<Image
						src='/images/logoA.svg'
						alt='Центральный логотип АКРОН'
						width={25}
						height={25}
						className={styles.logoA}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header

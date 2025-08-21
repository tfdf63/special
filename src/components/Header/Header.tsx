'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 767)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)

		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<div className={styles.logoWrapper}>
					{/* Вращающийся внешний логотип */}
					{isMobile ? (
						<Image
							src='/images/logoT.svg'
							alt='Внешний логотип АКРОН'
							width={45}
							height={45}
							className={styles.logoT}
						/>
					) : (
						<svg className={styles.logoT} viewBox='0 0 100 100'>
							<use href='/images/logoT.svg' />
						</svg>
					)}

					{/* Статичный центральный логотип */}
					{isMobile ? (
						<Image
							src='/images/logoA.svg'
							alt='Центральный логотип АКРОН'
							width={25}
							height={25}
							className={styles.logoA}
						/>
					) : (
						<svg className={styles.logoA} viewBox='0 0 100 100'>
							<use href='/images/logoA.svg' />
						</svg>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header

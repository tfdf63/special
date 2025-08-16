'use client'

import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.logoContainer}>
					<Image
						src='/images/logo.png'
						alt='Логотип'
						width={136}
						height={136}
						className={styles.logo}
					/>
				</div>

				<div className={styles.centerSection}>
					<h2 className={styles.title}>ЭТО ВСË АКРОН</h2>
					<div className={styles.socialIcons}>
						<a
							href='https://vk.com/fcakron?utm_medium=special'
							className={styles.socialLink}
						>
							<Image
								src='/images/social/vk.svg'
								alt='VK'
								width={41}
								height={41}
								className={styles.socialIcon}
							/>
						</a>
						{/* <a href='#' className={styles.socialLink}>
							<Image
								src='/images/social/youtube.png'
								alt='YouTube'
								width={41}
								height={41}
								className={styles.socialIcon}
							/>
						</a> */}
						<a
							href='https://t.me/fcakron?utm_medium=special'
							className={styles.socialLink}
						>
							<Image
								src='/images/social/tg.svg'
								alt='Telegram'
								width={41}
								height={41}
								className={styles.socialIcon}
							/>
						</a>
					</div>
				</div>

				<div className={styles.logoContainer}>
					<Image
						src='/images/logo.png'
						alt='Логотип'
						width={136}
						height={136}
						className={styles.logo}
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer

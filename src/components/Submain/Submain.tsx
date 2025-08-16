'use client'

import React, { useState } from 'react'
import styles from './Submain.module.scss'
import Modal from '../Modal'

const Submain = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<section className={styles.submain}>
				<div className={styles.overlay}>
					<div className={styles.textContent}>
						<p className={styles.description}>
							СМИ называют Акрон «инди-клубом»,
							<br className={styles.mobileBreak} />
							а мы — стремимся оправдать это название:
							<br className={styles.desktopBreak} />
							<br className={styles.mobileBreak} /> привлекаем молодых творцов,
							популяризируем <br className={styles.mobileBreak} /> модернизм и
							влюбляем в спорт тех, <br className={styles.desktopBreak} />{' '}
							<br className={styles.mobileBreak} />
							кто раньше не понимал, а потом как всё понял!
						</p>
						<p className={styles.description}>
							Здесь ты познакомишься со специальными
							<br className={styles.mobileBreak} />
							проектами, событиями и всем,{' '}
							<br className={styles.desktopBreak} />
							<br className={styles.mobileBreak} />
							что создано Акроном за пределами{' '}
							<br className={styles.mobileBreak} />
							футбольного поля.
						</p>

						<button className={styles.button} onClick={openModal}>
							ПОДРОБНЕЕ
						</button>
					</div>
				</div>
			</section>

			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</>
	)
}

export default Submain

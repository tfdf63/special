'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './Modal.module.scss'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	// Закрытие по нажатию Escape
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden' // Блокируем прокрутку
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset' // Возвращаем прокрутку
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<button
					className={styles.closeButton}
					onClick={onClose}
					aria-label='Закрыть'
				>
					<Image
						src='/images/close.svg'
						alt='Закрыть'
						width={30}
						height={30}
						className={styles.closeIcon}
					/>
				</button>

				<div className={styles.textContent}>
					<p className={styles.textBlock}>
						Акрон — футбольный клуб из&nbsp;Тольятти, представляющий
						промышленно-металлургический холдинг AKRON HOLDING. Основан
						в&nbsp;2018 году.
					</p>

					<p className={styles.textBlock}>
						Мы&nbsp;играем в&nbsp;Российской премьер-лиге с&nbsp;мастодонтами
						отечественного футбола.
					</p>

					<p className={styles.textBlock}>
						Здесь можно{' '}
						<a
							href='https://matchday.fcakron.ru/?utm_medium=special'
							className={styles.ticketLink}
						>
							приобрести билет
						</a>{' '}
						на&nbsp;матчи на&nbsp;Солидарность Самара Арена.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Modal

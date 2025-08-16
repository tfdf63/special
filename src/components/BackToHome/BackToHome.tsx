import React from 'react'
import Link from 'next/link'
import styles from './BackToHome.module.scss'

const BackToHome: React.FC = () => {
	return (
		<Link href='/' className={styles.backLink}>
			&lt; НА ГЛАВНУЮ
		</Link>
	)
}

export default BackToHome

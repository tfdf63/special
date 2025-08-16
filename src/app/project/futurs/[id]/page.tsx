import React from 'react'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import BackToHome from '../../../../components/BackToHome'
import ProjectImageSlider from '../../../../components/ProjectImageSlider'
import styles from './page.module.scss'
import { projectFutursData } from '../../../../data/projectFuturs'

interface PageProps {
	params: Promise<{
		id: string
	}>
}

export function generateStaticParams() {
	return projectFutursData.map(project => ({
		id: project.id.toString(),
	}))
}

const ProjectFuturePage: React.FC<PageProps> = async ({ params }) => {
	const { id } = await params
	const project = projectFutursData.find(p => p.id === parseInt(id))

	if (!project) {
		return (
			<div className={styles.page}>
				<Header />
				<main className={styles.main}>
					<div className={styles.content}>
						<BackToHome />
						<h2>Проект не найден</h2>
					</div>
				</main>
				<Footer />
			</div>
		)
	}

	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<div className={styles.content}>
					<BackToHome />
					<h2
						dangerouslySetInnerHTML={{
							__html: project.title,
						}}
					/>

					{project.content.map((block, index) => {
						switch (block.type) {
							case 'text':
								return (
									<div key={index} className={styles.subtitle}>
										{Array.isArray(block.content) &&
											block.content.map((text, textIndex) => (
												<p
													key={textIndex}
													dangerouslySetInnerHTML={{
														__html: text,
													}}
												/>
											))}
									</div>
								)
							case 'heading':
								return (
									<h2
										key={index}
										dangerouslySetInnerHTML={{
											__html: block.content as string,
										}}
									/>
								)
							case 'subheading':
								return (
									<h3
										key={index}
										dangerouslySetInnerHTML={{
											__html: block.content as string,
										}}
									/>
								)
							case 'slider':
								return (
									<ProjectImageSlider
										key={index}
										images={Array.isArray(block.content) ? block.content : []}
									/>
								)
							default:
								return null
						}
					})}
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default ProjectFuturePage

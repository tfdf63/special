import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Submain from '../components/Submain'
import WhiteSection from '../components/WhiteSection'
import Ticker from '../components/Ticker'
import WhiteSectionFuture from '../components/WhiteSectionFuture'
import Footer from '../components/Footer'

const MatchesPage = () => {
	return (
		<>
			<Header />
			<Main />
			<Submain />
			<WhiteSection />
			<Ticker speed={50} />
			<WhiteSectionFuture />
			<Footer />
		</>
	)
}

export default MatchesPage

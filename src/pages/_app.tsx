import Footer from "../components/Footer"
import Header from "../components/Header"
import { AppProps } from 'next/app'

export default function myApp({Component, pageProps}: AppProps) {
	return(<>

		<Header/>
		<main>
			<Component {...pageProps} />
		</main>
		<Footer/>

	</>)
}
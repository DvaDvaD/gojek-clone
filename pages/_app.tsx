import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Navbar from '../components/Navbar'
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), {
	ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

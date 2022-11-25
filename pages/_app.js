import React from "react";
import "../styles/globals.scss";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MusicPlayer from "../components/player/MusicPlayer";

function MyApp({ Component, pageProps }) {
	const commonHeader = Component.commonHeader;
	console.log(commonHeader);
	return (
		<React.Fragment>
			{!commonHeader ? <Header /> : ""}
			<Component {...pageProps} />
			<Footer />
			<MusicPlayer />
		</React.Fragment>
	);
}

export default MyApp;

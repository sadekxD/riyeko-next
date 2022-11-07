import React from "react";
import "../styles/globals.scss";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</React.Fragment>
	);
}

export default MyApp;

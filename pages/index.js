import Head from "next/head";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Riyeko - Home Page</title>
				<meta
					name="description"
					content="Be one of our 5,555 Riyeko Players and join us in our quest to
									shape the NFT ecosystem into a secure and exciting space."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<HeroSection />
			</main>
		</div>
	);
};

Home.commonHeader = true;
export default Home;

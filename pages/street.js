import Head from "next/head";
import StreetSection from "../components/sections/StreetSection";

const Street = () => {
	return (
		<div>
			<Head>
				<title>Street</title>
			</Head>
			<main>
				<StreetSection />
			</main>
		</div>
	);
};

export default Street;

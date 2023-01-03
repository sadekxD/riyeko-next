import Head from "next/head";
import RoadmapSection from "../components/sections/RoadmapSection";

const Roadmap = () => {
	return (
		<div>
			<Head>
				<title>Roadmap</title>
			</Head>
			<main>
				<RoadmapSection />
			</main>
		</div>
	);
};

export default Roadmap;

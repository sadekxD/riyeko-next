import Head from "next/head";
import TeamSection from "../components/sections/TeamSection";

const Team = () => {
	return (
		<div>
			<Head>
				<title>Team</title>
			</Head>
			<main>
				<TeamSection />
			</main>
		</div>
	);
};

export default Team;

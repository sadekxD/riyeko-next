import { v4 as uuidv4 } from "uuid";

function chillHop() {
	return [
		{
			name: "Beaver Creek",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Daylight",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
			id: uuidv4(),
			active: false,
		},
		{
			name: "Keep Going",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;

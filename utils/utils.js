const wait = (t) => {
	return new Promise((resolve) => setTimeout(resolve, t));
};

const main = async () => {
	console.log("hello");
	await wait(2000);
	console.log("world");
};

main();

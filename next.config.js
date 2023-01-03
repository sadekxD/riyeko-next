module.exports = {
	reactStrictMode: true,
	env: {
		ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
		INFURA_API_KEY: process.env.INFURA_API_KEY,
		CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
		SHEET_BEST_API_KEY: process.env.SHEET_BEST_API_KEY,
	},
};

import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ethers } from "ethers";
import CONTRACT_ABI from "../abis/CONTRACT_ABI.json";

const useContractStore = create()(
	devtools(
		persist((set) => ({
			mintInfo: {},
			fetchMintInfo: async () => {
				const contract_address = process.env.CONTRACT_ADDRESS;
				const provider = new ethers.providers.WebSocketProvider(
					`wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
				);
				const contract = new ethers.Contract(
					contract_address,
					CONTRACT_ABI,
					provider
				);
				const minted = await contract.totalSupply();
				const presaleCost = await contract.presaleCost();
				const publicCost = await contract.publicCost();
				const preSale = await contract.preSale();
				const publicSale = await contract.publicSale();
				set({
					mintInfo: {
						minted: parseInt(minted),
						presaleCost: ethers.utils.formatUnits(presaleCost, "ether"),
						publicCost: ethers.utils.formatUnits(publicCost, "ether"),
						preSale,
						publicSale,
					},
				});
			},
		}))
	)
);

export { useContractStore };

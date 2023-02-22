import React, { useState, useEffect, useCallback } from "react";
import "../styles/globals.scss";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MusicPlayer from "../components/player/MusicPlayer";
import CONTRACT_ABI from "../abis/CONTRACT_ABI.json";
import { Provider } from "../context/GlobalContext";
import { useContractStore } from "../store/store";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import whitelist from "../wallets/wallets.json";
import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";

const INFURA_KEY = process.env.INFURA_API_KEY;

const providerOptions = {
	coinbasewallet: {
		package: CoinbaseWalletSDK,
		options: {
			appName: "Web 3 Modal Demo",
			infuraId: INFURA_KEY,
		},
	},
	walletconnect: {
		package: WalletConnect,
		options: {
			infuraId: INFURA_KEY,
		},
	},
};

let web3Modal;
if (typeof window !== "undefined") {
	web3Modal = new Web3Modal({
		network: "mainnet", // optional
		cacheProvider: true,
		providerOptions, // required
	});
}

function MyApp({ Component, pageProps }) {
	const commonHeader = Component.commonHeader;
	const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
	const [connected, setConnected] = useState(false);
	const [mintInfo, fetchMintInfo] = useContractStore((state) => [
		state.mintInfo,
		state.fetchMintInfo,
	]);
	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [value, setValue] = useState(1);
	const [minted, setMinted] = useState(0);
	const [wallet, setWallet] = useState("");
	const [limit, setLimit] = useState(10);
	const [open, setOpen] = useState(false);
	const [web3, setWeb3] = useState(web3Modal);

	const connectWallet = useCallback(async () => {
		try {
			const provider = await web3Modal.connect();
			const ethersProvider = new ethers.providers.Web3Provider(provider);

			setProvider(ethersProvider);
			setSigner(ethersProvider.getSigner());
			getAccount(ethersProvider);
		} catch (err) {
			toast.error("Connect to mainnet!", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				icon: false,
			});
		}
	}, []);

	// useEffect(() => {
	// 	if (web3Modal.cachedProvider) {
	// 		connectWallet();
	// 	}
	// }, [connectWallet]);

	useEffect(() => {
		fetchMintInfo();
	}, []);

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on("accountsChanged", checkIfWalletIsConnected);
		}
	}, []);

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			return;
		}

		const accounts = await ethereum.request({ method: "eth_accounts" });

		if (accounts.length !== 0) {
			const account = accounts[0];
			setWallet(account);
		} else {
			setWallet("");
		}
	};

	const getAccount = async (provider) => {
		const accounts = await provider.listAccounts();
		const network = await provider.getNetwork();
		const chainId = network.chainId;

		if (chainId === 1) {
			setConnected(true);
			setWallet(accounts[0]);
			toast.success("Wallect connected!", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				icon: false,
			});
		} else {
			setConnected(false);
			toast.error("Connect to mainnet!", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				icon: false,
			});
		}
	};

	const getProof = (list, wallet) => {
		const whitelistedNodes = list.map((addr) => keccak256(addr));
		const whitelistedMerkleTree = new MerkleTree(whitelistedNodes, keccak256, {
			sortPairs: true,
		});

		return whitelistedMerkleTree.getHexProof(keccak256(wallet));
	};

	const mint = async () => {
		const id = toast("minting...", {
			position: "bottom-center",
			autoClose: false,
			isLoading: true,
		});

		try {
			const contract = new ethers.Contract(
				CONTRACT_ADDRESS,
				CONTRACT_ABI,
				signer
			);

			let price;
			const preSale = await contract.preSale();
			const publicSale = await contract.publicSale();
			const proof = getProof(whitelist, wallet);

			let res;

			if (preSale) {
				if (proof.length <= 0) {
					// toast.error("You are not in the whitelist!", {
					// 	position: "bottom-center",
					// 	autoClose: 5000,
					// 	hideProgressBar: false,
					// 	closeOnClick: true,
					// 	pauseOnHover: true,
					// 	draggable: true,
					// 	progress: undefined,
					// 	theme: "light",
					// 	icon: false,
					// });
					toast.update(id, {
						render: "You are not in the whitelist!",
						position: "bottom-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						type: "info",
						icon: true,
						isLoading: false,
					});
					// toast.update(id, { isLoading: false, autoClose: 10 });
					return;
				}
				price = await contract.presaleCost();
				res = await contract.allowlistMint(value, proof, {
					value: price.mul(value),
				});

				await res.wait();
			} else if (publicSale) {
				price = await contract.publicCost();
				res = await contract.mint(value, {
					value: price.mul(value),
				});
				await res.wait();
			} else {
				toast.update(id, {
					render: "Minting hasn't started yet!",
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					type: "info",
					icon: true,
					isLoading: false,
				});
				return;
			}

			await res.wait();

			toast.update(id, {
				render: "NFT minted!",
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: "success",
				icon: true,
				isLoading: false,
			});
		} catch (err) {
			console.log(err);
			toast.update(id, {
				render: "Low gas!",
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				icon: true,
				type: "error",
				isLoading: false,
			});
		}
	};

	// Handle NFTs Count
	const handleCount = (type = "inc") => {
		if (type === "inc") {
			if (value < limit) {
				setValue(value + 1);
			}
		} else {
			if (value > 1) {
				setValue(value - 1);
			}
		}
	};

	const disconnect = async () => {
		web3Modal.clearCachedProvider();
		setConnected(false);
	};

	return (
		<Provider
			value={{
				connectWallet,
				handleCount,
				disconnect,
				mint,
				value,
				connected,
				mintInfo,
				web3,
			}}
		>
			<React.Fragment>
				{!commonHeader ? <Header /> : ""}
				<Component {...pageProps} />
				<Footer />
				<MusicPlayer />
				<ToastContainer />
			</React.Fragment>
		</Provider>
	);
}

export default MyApp;

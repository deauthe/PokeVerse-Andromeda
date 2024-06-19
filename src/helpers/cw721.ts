import AndromedaClient from "@andromedaprotocol/andromeda.js";
import { error } from "console";

export const queryAllNfts = async (
	client: AndromedaClient,
	contract_address: string
) => {
	const queryMessage = {
		all_tokens: {
			limit: 100,
		},
	};
	try {
		const nfts = await client?.queryContract(contract_address, queryMessage);
		return nfts;
	} catch (error) {
		console.error(error);
	}
};

export const findMyNfts = async (
	contract_address: string,
	client: AndromedaClient,
	my_wallet_address: string
) => {
	const allNfts = await queryAllNfts(client, contract_address);
	if (allNfts.length === 0 || !allNfts) return error("No NFTs found");
	const myNfts = allNfts.filter((nft: any) => nft.owner === my_wallet_address);
	return myNfts;
};

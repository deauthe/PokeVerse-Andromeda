import AndromedaClient from "@andromedaprotocol/andromeda.js";
const marketPlaceContractAddress =
	process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS;

interface buyNftProps {
	client: AndromedaClient | undefined;
	contract_address?: string;
	token_id: string;
}
export const buyNftWithTokenId = async ({
	client,
	contract_address = marketPlaceContractAddress,
	token_id,
}: buyNftProps) => {
	if (!client) {
		console.log("client missing");
		return;
	}
	const query = {
		buy: {
			token_id,
			token_address: contract_address,
		},
	};
	console.log(contract_address);

	if (!contract_address || !query || !client) {
		console.log("Something is missing:", contract_address, query);
		return;
	}
	try {
		const nft = await client?.execute(contract_address, query);
		console.log("bought nft", nft);
	} catch (error) {
		console.error(error);
	}
};

export const queryMarketPlaceUsingTokenIds = async (
	client: AndromedaClient | undefined,

	token_ids = [1, 2, 3, 4, 5, 6]
) => {
	if (!client) {
		console.log("client missing");
		return;
	}
	const contract_address = marketPlaceContractAddress;
	for (const tokenId of token_ids) {
		try {
			const query = {
				latest_sale_state: {
					token_id: tokenId,
					token_address: contract_address,
				},
			};

			if (!contract_address || !query || !client) {
				console.log("Something is missing:", contract_address, query);
				return;
			}

			const randomNft = await client?.queryContract(
				marketPlaceContractAddress!,
				query
			);
			console.log("NFT received:", randomNft);
		} catch (error) {
			console.error("Error querying MarketPlace:", error);
		}
	}
};

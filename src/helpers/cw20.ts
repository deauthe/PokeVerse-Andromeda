export const sendTokens = async (
	recepient_contract_address: string,
	amount: number
) => {
	const query = {
		send: {
			contract: recepient_contract_address,
			amount: amount,
			msg: "eyJzZW5kIjp7fX0=",
		},
	};
};

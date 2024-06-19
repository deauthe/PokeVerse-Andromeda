"use client";
import { Button } from "@/components/ui/button";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomModal from "@/components/ModalWindow/modal";
import {
	buyNftWithTokenId,
	queryMarketPlaceUsingTokenIds,
} from "@/helpers/cw_marketplace";
type Props = {};

const MarketPlace = (props: Props) => {
	const [cw721_address, setCw721Address] = useState<string | undefined>();
	const client = useAndromedaClient();

	const handleBuyNft = async (token_id: string) => {
		console.log("heko");
		queryMarketPlaceUsingTokenIds(client, [1, 2, 3]);
		buyNftWithTokenId({ client, token_id });
	};

	useEffect(() => {});

	return (
		<div className="flex flex-col mt-3 gap-2 justify-center  lg:mx-[13em] ">
			<div className="flex">
				<Button className="mx-auto">Query MarketPlace</Button>
			</div>
			<div>
				{["0"].map((item, index) => {
					return (
						<div
							key={index}
							className="grid lg:grid-cols-3  grid-cols-3 gap-9 relative  mt-[6em] min-h-screen"
						>
							{/* Foreground Image */}
							<div className="col-span-1">
								<Image
									src="/png-image.png"
									width={300}
									height={300}
									alt="NFT Image"
									className="z-10"
								/>
								<button
									onClick={() => handleBuyNft("1")}
									className="btn btn-primary rounded-full btn-sm h-6 mx-auto w-fit"
								>
									buy random nft
								</button>
							</div>
							<div className="col-span-1">
								<Image
									src="/png-image.png"
									width={300}
									height={300}
									alt="NFT Image"
									className="z-10"
								/>
								<button
									onClick={() => handleBuyNft("1")}
									className="btn btn-primary rounded-full btn-sm h-6"
								>
									buy random nft
								</button>
							</div>
							<div className="col-span-1">
								<Image
									src="/png-image.png"
									width={300}
									height={300}
									alt="NFT Image"
									className="z-10"
								/>
								<button
									onClick={() => handleBuyNft("1")}
									className="btn btn-primary rounded-full btn-sm h-6"
								>
									buy random nft
								</button>
							</div>

							{/* assets */}
							<div className="col-span-1">
								<Image
									src="/apple-touch-icon.png"
									width={300}
									height={300}
									alt="NFT Image"
									className="z-10"
								/>
								<button
									onClick={() => handleBuyNft("1")}
									className="btn btn-primary rounded-full btn-sm h-6"
								>
									buy random nft
								</button>
							</div>
							<div className="col-span-1">
								<Image
									src="/apple-touch-icon.png"
									width={300}
									height={300}
									alt="NFT Image"
									className="z-10"
								/>
								<button
									onClick={() => handleBuyNft("1")}
									className="btn btn-primary rounded-full btn-sm h-6"
								>
									buy random nft
								</button>
							</div>
							<div className="col-span-1 ">
								<Image
									src="/apple-touch-icon.png"
									width={300}
									height={300}
									alt="NFT Image"
									className="z-10"
								/>
								<button
									onClick={() => handleBuyNft("1")}
									className="btn btn-primary rounded-full btn-sm h-6"
								>
									buy random nft
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MarketPlace;

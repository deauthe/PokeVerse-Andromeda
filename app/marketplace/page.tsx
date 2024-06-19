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
			<div className="grid lg:grid-cols-4  grid-cols-4 gap-9 relative  mt-[6em] ">
				{["0"].map((item, index) => {
					return (
						<div key={index}>
							<div
								key={index}
								className="relative w-full h-full m-auto rounded-lg shadow-md p-4 overflow-hidden border-3 border-red-400 glassmorphism  "
								style={{
									height: "250px",
									width: "350px",
								}}
							>
								{/* Background Image
                <Image
                  src="/NFT-Frame.png"
                  layout="fill"
                  objectFit="contain"
                  alt="NFT Frame"
                  className="absolute inset-0 z-20"
                /> */}

								{/* Foreground Image */}
								<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[200px] z-10 -mt-3">
									<Image
										src="/png-image.png"
										layout="fill"
										objectFit="cover"
										alt="NFT Image"
										className="z-10"
									/>
								</div>
								{/* <div className="absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2   bg opacity-100 hover:opacity-100 w-[320px] h-[180px] cursor-pointer z-40">
                <p className=" mt-0 pt-3 pl-4   ">
                  <span
                  className="bg-red-400 p-2  rounded-lg font-extrabold" 
                  >1/100</span>
                </p>
                </div> */}
							</div>
							<button
								onClick={() => handleBuyNft("1")}
								className="btn btn-primary rounded-full btn-sm h-6"
							>
								buy random nft
							</button>

							<div className="flex justify-center">
								<CustomModal />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MarketPlace;

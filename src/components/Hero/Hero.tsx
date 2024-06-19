"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import "./hero.css";
import { useRouter } from "next/navigation";
import Card from "../Card";
import pokemon from "../../../public/20048-2-pikachu-hd.png";
import dragon from "../../../public/png-image.png";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { connectAndromedaClient, useAndromedaStore } from "@/zustand/andromeda";

const HeroBanner = () => {
	const router = useRouter();
	const client = useAndromedaClient();
	return (
		<div className="">
			<div
				className={` flex flex-col items-center  lg:flex-row gap-4 w-[95%] md:w-[80%] m-auto mt-[3em]`}
			>
				<div
					className={`mx-auto ${
						client ? "" : "blur-[2px] pointer-events-none"
					} lg:w-[40%] glassmorphism border-2 border-red-500 p-6 relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]`}
				>
					<p className="font text-sm md:text-xl tracking-[7px] text-white mt-3 mb-0">
						Gotta catch em all{" "}
					</p>
					<Card text={"Enter pokêmart"} image={pokemon} />
				</div>

				<div
					className={` ${
						// account.length > 0 && nfts != 0 && is
						// ? ""
						// :
						" pointer-events-none"
					} lg:w-[60%]  glassmorphism border-2 border-red-500 p-6 relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[700px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]`}
				>
					<p className="font text-sm md:text-xl tracking-[7px] text-white  ">
						Enter in Pokemon Game{" "}
					</p>

					<Card text={"Enter in Game"} image={dragon} />
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;

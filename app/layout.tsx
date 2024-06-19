import React, { ReactNode } from "react";
import Providers from "./providers";
import { Metadata } from "next";
import PoweredByLogo from "@/modules/ui/PoweredByLogo";
import "@/styles/globals.css";

import Navbar from "@/components/NavBar/Navbar";
import Image from "next/image";
export const metadata: Metadata = {
	title: {
		default: "Deauth",
		template: "%s | App Name",
	},
};

interface Props {
	children?: ReactNode;
}

const RootLayout = async (props: Props) => {
	const { children } = props;

	return (
		<html lang="en">
			<body className="relative bg-black  w-full m-auto">
				<div className="fixed inset-0 -z-50 opacity-50">
					<Image
						src={"/background.png"}
						alt="haha"
						layout="fill"
						objectFit="cover"
						className="object-fill "
					/>
				</div>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;

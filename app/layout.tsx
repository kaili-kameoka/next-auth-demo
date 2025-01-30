import type {Metadata} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "@/components/MainNav/MainNav";
import {Container} from "react-bootstrap";
import {Amplify} from "@aws-amplify/core";
import outputs from '@/amplify_outputs.json';
import {ReactNode} from "react";
import {AmplifySetup} from "@/lib/amplify/AmplifySetup";

Amplify.configure(outputs);


export const metadata: Metadata = {
	title: "NextJS Auth Demo",
	description: "A NextJS Authentication Example",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: ReactNode;
}>) {
	return (
			<html lang="en">
			<AmplifySetup />
			<body>
			<MainNav/>
			<main className="my-5">
				<Container>
					{children}
				</Container>
			</main>
			</body>
			</html>
	);
}

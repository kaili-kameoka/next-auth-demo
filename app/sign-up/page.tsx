import React from 'react';
import {Col, Row} from "react-bootstrap";
import SignUpForm from "@/app/sign-up/SignUpForm";

function Page() {
	return (
			<Row>
				<Col lg={8}>
					<h2>Sign Up</h2>
					<SignUpForm />
				</Col>
			</Row>
	);
}

export default Page;
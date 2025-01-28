'use client'
import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

function SignUpForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
			<Form className={'d-flex flex-column gap-3'}>
				<Form.Group>
					<Form.Label htmlFor={'firstName'}>First Name</Form.Label>
					<Form.Control
							type={'text'}
							name={'firstName'}
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor={'lastName'}>Last Name</Form.Label>
					<Form.Control
							type={'text'}
							name={'lastName'}
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor={'email'}>Email</Form.Label>
					<Form.Control
							type={'email'}
							name={'email'}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor={'password'}>Password</Form.Label>
					<Form.Control
							type={'password'}
							name={'password'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Button type={'submit'}>Sign Up</Button>
				</Form.Group>
			</Form>
	);
}

export default SignUpForm;
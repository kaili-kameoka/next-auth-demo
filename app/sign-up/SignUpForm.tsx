'use client'
import React, {useActionState, useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {SignUpFormData} from "@/app/sign-up/types";
import initialSignUpFormData from "@/app/sign-up/initialSignUpFormData";
import makeChangeHandler from "@/lib/forms/makeChangeHandler";
import {signUpAction} from "@/app/sign-up/actions";

function SignUpForm() {
	const [formState, setFormState] = useState<SignUpFormData>(initialSignUpFormData);
	const [formData, formAction] = useActionState(signUpAction, initialSignUpFormData)

	const handleChange = makeChangeHandler(setFormState)

	return (
			<form action={formAction} className="d-flex flex-column gap-4">
				<Form.Group>
					<Form.Label htmlFor={'firstName'}>First Name</Form.Label>
					<Form.Control
							type={'text'}
							id='firstName'
							name={'firstName'}
							value={formState.firstName}
							onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor={'lastName'}>Last Name</Form.Label>
					<Form.Control
							type={'text'}
							id='lastName'
							name={'lastName'}
							value={formState.lastName}
							onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor={'email'}>Email</Form.Label>
					<Form.Control
							type={'email'}
							id='email'
							name={'email'}
							value={formState.email}
							onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor={'password'}>Password</Form.Label>
					<Form.Control
							type={'password'}
							id='password'
							name={'password'}
							value={formState.password}
							onChange={handleChange}
					/>
				</Form.Group>
				{formState.error && (
						<Alert variant={'danger'}>{formState.error}</Alert>
				)}
				{formData.error && (
						<Alert variant={'danger'}>{formData.error}</Alert>
				)}
				<Form.Group>
					<Button type="submit">Sign Up</Button>
				</Form.Group>
			</form>
	);
}

export default SignUpForm;
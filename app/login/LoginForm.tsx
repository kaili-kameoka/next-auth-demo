'use client'
import React, {useActionState, useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {LoginFormData} from "@/app/login/types";
import initialLoginFormData from "@/app/login/initialLoginFormData";
import makeChangeHandler from "@/lib/forms/makeChangeHandler";
import {loginAction} from "@/app/login/actions";

function LoginForm() {
	const [formState, setFormState] = useState<LoginFormData>(initialLoginFormData);
	const [formData, formAction] = useActionState(loginAction, initialLoginFormData)

	const handleChange = makeChangeHandler(setFormState)

	return (
			<Form action={formAction} className={'d-flex flex-column gap-4'}>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
							type="email"
							id={'email'}
							name={'email'}
							value={formState.email}
							onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
							type="password"
							id={'password'}
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
					<Button type="submit">Login</Button>
				</Form.Group>
			</Form>
	);
}

export default LoginForm;
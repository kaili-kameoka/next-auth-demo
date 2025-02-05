'use server'
import {login} from "@/lib/amplify/auth";
import {LoginFormData} from "@/app/login/types";

export async function loginAction(previous: LoginFormData, formData: FormData): Promise<LoginFormData> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	console.log('loginAction:', email, password)
	if (!email || !password) {
		return {...previous, error: 'All fields are required'};
	}

	try {
		await login(email, password);
		return {email, password, error: '', success: false};
	} catch (error) {
		const e: Error = error as Error;
		console.log(error);

		return {email, password, error: e.message, success: false};
	}

}
'use server'
import {createAuthUser} from "@/lib/amplify/auth";
import {createUserProfile} from "@/lib/amplify/data/UserProfile";
import {SignUpFormData} from "@/app/sign-up/types";

export async function signUpAction(previous: SignUpFormData, formData: FormData): Promise<SignUpFormData> {
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (!firstName || !lastName || !email || !password) {
		return {...previous, error: 'All fields are required'};
	}

	try {
		console.log('values:', firstName, lastName, email, password);
		await createAuthUser(email, password);
		await createUserProfile(firstName, lastName);
		return {firstName, lastName, email, password, error: ''};
	} catch (error) {
		const e: Error = error as Error;
		console.log(error);

		return {firstName, lastName, email, password, error: e.message};
	}

}
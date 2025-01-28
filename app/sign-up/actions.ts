import {signUp as amplifySignUp} from 'aws-amplify/auth';

export async function signUp(email: string, password: string) {
	await amplifySignUp({
		username: email,
		password: password,
		options: {userAttributes: {email}}
	})
}
import {signUp, signIn} from "aws-amplify/auth";

export async function createAuthUser(email: string, password: string) {
	await signUp({
		username: email,
		password,
		options: {userAttributes: {email}}
	});
}

export async function login(email: string, password: string) {
	await signIn({
		username: email,
		password,
	});
}
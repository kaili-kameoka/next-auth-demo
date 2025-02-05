import {signUp, signIn} from "aws-amplify/auth";
import {runWithAmplifyServerContext} from "@/lib/amplify/server";

export async function createAuthUser(email: string, password: string) {
	await runWithAmplifyServerContext({
		nextServerContext: null,
		operation: async () => {
			await signUp({
				username: email,
				password,
				options: {userAttributes: {email}}
			});
		}
	});
}

export async function login(email: string, password: string) {
	await runWithAmplifyServerContext({
		nextServerContext: null,
		operation: async () => {
			await signIn({
				username: email,
				password,
			});
		}
	})

}
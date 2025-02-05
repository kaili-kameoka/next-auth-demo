import {createServerRunner} from "@aws-amplify/adapter-nextjs";
import config from '@/amplify_outputs.json';
import {NextRequest, NextResponse} from "next/server";
import {fetchAuthSession} from "@aws-amplify/auth/server";

console.log('configuring...');
export const { runWithAmplifyServerContext } = createServerRunner({config})

export async function isAuthenticated(request: NextRequest, response: NextResponse) {
	return await runWithAmplifyServerContext({
		nextServerContext: {request, response},
		operation: async (contextSpec) => {
			try {
				const session = await fetchAuthSession(contextSpec);
				console.log('session', session)
				return session.tokens?.accessToken !== undefined && session.tokens?.idToken !== undefined
			} catch (e) {
				console.error('Something went wrong:', e)
				return false;
			}
		}
	})
}
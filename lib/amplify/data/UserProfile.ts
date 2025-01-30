import {generateClient} from "aws-amplify/api";
import type {Schema} from "@/amplify/data/resource";

const client = generateClient<Schema>()

export async function createUserProfile(firstName: string, lastName: string) {
	await client.models.UserProfile.create({firstName, lastName});
}
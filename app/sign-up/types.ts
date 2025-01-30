import {FormDataFields} from "@/lib/forms/types";

export interface SignUpFormData extends FormDataFields {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
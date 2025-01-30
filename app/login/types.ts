import {FormDataFields} from "@/lib/forms/types";

export interface LoginFormData extends FormDataFields {
	email: string;
	password: string;
}
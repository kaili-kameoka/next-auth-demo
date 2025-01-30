import {ChangeEvent, Dispatch, SetStateAction} from "react";

export default function makeChangeHandler<T>(setFormData: Dispatch<SetStateAction<T>>){
	return function (event: ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}


}
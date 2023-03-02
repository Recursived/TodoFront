import {TodoModel} from "../models/TodoModel";

const uuid: () => string = () => {
	let random;
	let uuid = '';
	for (let i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;

		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}

		uuid += (i === 12 ? 4 : (i === 16 ? ((random & 3) | 8) : random))
			.toString(16);
	}
	return uuid;
}

const pluralize: (count: number, word: string) => string = (count, word) => {
	return count <= 1 ? word : word + 's';
}

const saveData: (np: string, data: TodoModel[]) => void = (np, data) => {
	if (data) {
		return localStorage.setItem(np, JSON.stringify(data));
	}
}

const loadData: (np: string) => TodoModel[] = (np) => {
	let str_data = localStorage.getItem(np);
	if (str_data) {
		let json_data = JSON.parse(str_data);
		return Array.isArray(json_data) ? json_data : [];
	}
	return [];
}


export {
	uuid,
	pluralize,
	saveData,
	loadData
}

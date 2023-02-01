import {seed, Todo} from 'src/utils/seed';


// init of db
var db = seed();

/**
 * Fichier qui regroupe les fonctions CRUD qui agissent sur la BDD
 * qui est une liste de Todo
 */

async function getTodos() : Promise<Todo[] | undefined> {
	return db;
}

async function createTodo(todo : Todo) : Promise<Todo> {
	db?.push(todo);
	return todo;
}


async function updateTodo(id: number, todo : Todo) : Promise<Todo> {
	var itemIndex: number | undefined = db?.findIndex((t : Todo) => t.id === id);
	if (db && itemIndex) {db[itemIndex] = todo;}
	return todo;
}

async function deleteTodo(id: number) : Promise<boolean> {
	db = db?.filter((t : Todo) => t.id == id);
	return true;
}

export {
	getTodos,
	createTodo,
	updateTodo,
	deleteTodo

}

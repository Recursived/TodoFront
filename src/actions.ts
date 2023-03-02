import {TodoAction, TodoActionKind, TodoPayload} from "./reducer";

function addTodo(payload: TodoPayload) : TodoAction {
	return {
		type: TodoActionKind.ADD_TODO,
		payload : payload
	}
}


function removeTodo(payload: TodoPayload) : TodoAction {
	return {
		type: TodoActionKind.REMOVE_TODO,
		payload: payload
	}
}


function updateTodo(payload: TodoPayload): TodoAction {
	return {
		type: TodoActionKind.UPDATE_TODO,
		payload: payload
	}
}


function toggleAll(payload: TodoPayload): TodoAction {
	return {
		type: TodoActionKind.TOGGLE_ALL_TODOS,
		payload: payload
	}
}

function changeDisplayedTodos(payload: TodoPayload) : TodoAction {
	return {
		type: TodoActionKind.CHANGE_DISPLAYED_TODOS,
		payload: payload
	}
}

function initTodos(payload: TodoPayload) : TodoAction {
	return {
		type: TodoActionKind.INIT_TODOS,
		payload: payload
	}
}

function clearCompletedTodos() : TodoAction {
	return {
		type: TodoActionKind.CLEAR_COMPLETED
	}
}

export {
	addTodo,
	removeTodo,
	updateTodo,
	toggleAll,
	changeDisplayedTodos,
	initTodos,
	clearCompletedTodos
}

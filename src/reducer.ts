import produce from "immer";
import {Reducer} from "react";
import {TodoModel} from "./models/TodoModel"

// Action types
enum TodoActionKind {
	ADD_TODO = "ADD_TODO",
	UPDATE_TODO = "UPDATE_TODO",
	REMOVE_TODO = "REMOVE_TODO",
	TOGGLE_ALL_TODOS = "TOGGLE_ALL_TODOS ",
	CHANGE_DISPLAYED_TODOS = "CHANGE_DISPLAYED_TODOS",
	INIT_TODOS = "INIT_TODOS"
};

enum TodoDisplayKind {
	ALL_TODOS = "TODO_APP/ALL_TODOS",
	ACTIVE_TODO = "TODO_APP/ACTIVE_TODO",
	COMPLETED_TODOS = "TODO_APP/COMPLETED_TODOS",
}

export interface TodoPayload {
	id?: string,
	title?: string,
	completed?: boolean,
	todo?: TodoModel,
	nowShowing?: TodoDisplayKind
	todos? : TodoModel[]
}

export interface TodoAction {
	type: TodoActionKind,
	payload: TodoPayload
}

export interface IState {
	nowShowing: TodoDisplayKind,
	todos: TodoModel[]
}

export const initState: IState = {
	nowShowing: TodoDisplayKind.ALL_TODOS,
	todos: []
}

const todoReducer : Reducer<IState, TodoAction> = (state , action) => {
	return produce<IState>(state, draft => {
		const {type, payload} = action;
		switch (type) {
			case TodoActionKind.ADD_TODO:
				if (action.payload.id && action.payload.title) {
					draft.todos.push({
						id: action.payload.id,
						title: action.payload.title,
						completed: false
					})
				}
				break;
			case TodoActionKind.REMOVE_TODO:
				console.log("removetodo", payload);
				draft.todos.filter(t => t.id !== payload.id)
				break;
			case TodoActionKind.UPDATE_TODO:
				console.log("payload", payload)
				draft.todos.map(t => (t.id === payload.todo?.id) ?  payload.todo : t)
				break;
			case TodoActionKind.TOGGLE_ALL_TODOS:
				draft.todos.map(t => {
					if (payload.completed !== undefined) t.completed = payload.completed;
				})
				break;
			case TodoActionKind.CHANGE_DISPLAYED_TODOS:
				if (action.payload.nowShowing) draft.nowShowing = action.payload.nowShowing
				break;
			case TodoActionKind.INIT_TODOS:
				if (action.payload.todos) draft.todos = action.payload.todos;
		}
	})
}


export {
	TodoActionKind,
	todoReducer
}

import {seed, Todo} from 'src/utils/seed';
import {createStore} from 'state-pool';



const store = createStore();
store.setState("todos", seed());


const debounce = (func : Function, timeout: number) => {
	let timer : any;
	return (...args: any[])  => {
		clearTimeout(timer);
		timer = setTimeout(() => { func.apply(this, args); }, timeout);

	}
}


store.persist({
    PERSIST_ENTIRE_STORE: true,      
    saveState: function (key, value, isInitialSet) {     
        const doStateSaving = () => {
            try {
                const serializedState = JSON.stringify(value);
                window.localStorage.setItem(key, serializedState);
            } catch {
                // Ignore write errors
            }
        }

        if (isInitialSet) {
            doStateSaving();
        }
        else {
            const DEBOUNCE_TIME = 1000; // In milliseconds
            const processStateSaving = debounce(doStateSaving, DEBOUNCE_TIME);
            processStateSaving();  // save State
        }
    },
    loadState: function (key, noState) {
        try {
            const serializedState = window.localStorage.getItem(key);
            if (serializedState === null) {
                // No state saved
		console.log(noState);
                return noState;
            }
            return JSON.parse(serializedState);
        } catch (err) {
            // Failed to load state
            return undefined;
        }
    },
    removeState: function (key) {
        window.localStorage.removeItem(key);
    },
    clear: function () {
        window.localStorage.clear();
    }
})



async function getTodos() : Promise<Todo[]> {
	return store.getState("todos").getValue();
}

async function createTodo(todo : Todo) : Promise<Todo> {
	const [todos, setTodos] = store.useState("todos");
	setTodos([...todos, todo]);
	return todo;
}


async function updateTodo(id: number, todo : Todo) : Promise<Todo> {
	const [todos, setTodos] = store.useState("todos");
	let indexTodo : number = todos.findIndex((t : Todo) => t.id === id);
	todos[indexTodo] = todo;
	setTodos([...todos]);
	return todo;
}

async function deleteTodo(id: number) : Promise<Todo[] | undefined> {
	const [todos, setTodos] = store.useState("todos");
	todos.filter((t : Todo) => t.id !== id);
	setTodos([...todos]);
	return todos;
}

export {
	getTodos,
	createTodo,
	updateTodo,
	deleteTodo,
}

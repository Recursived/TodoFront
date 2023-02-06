import {seed, Todo} from 'src/utils/seed';
import {createStore} from 'state-pool';



export const store = createStore();
store.setState("todos", seed());


const debounce = (func: Function, timeout: number) => {
	let timer: any;
	return (...args: any[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {func.apply(this, args);}, timeout);

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



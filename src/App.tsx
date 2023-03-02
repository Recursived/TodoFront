import {useEffect, useReducer} from 'react';
import {initTodos, toggleAll} from './actions';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoItem/TodoList';
import {TodoModel} from './models/TodoModel';
import {initState, TodoDisplayKind, todoReducer} from './reducer';
import {loadData, saveData} from './utils/functools';


function App() {
	const [state, dispatch] = useReducer(todoReducer, initState);
	const count : number = state.todos.filter(t => t.completed === false).length;
	let todos : TodoModel[];
	if (state.nowShowing === TodoDisplayKind.ALL_TODOS){
		todos = state.todos;
	} else if (state.nowShowing === TodoDisplayKind.ACTIVE_TODO){
		todos = state.todos.filter(t => !t.completed);
	} else {
		todos = state.todos.filter(t => t.completed);
	}

	// Use effect to load previously saved data
	useEffect(() => {
		dispatch(initTodos({todos: loadData("todoapp")}));
	}, []);
	
	// Use effect that saves todos data in the localStorage
	useEffect(() => {
		if (state.todos.length > 0) saveData("todoapp", state.todos);
	}, [state.todos]);

	return (
		<section className='todoapp'>
			<Header dispatch={dispatch} />
			{state.todos.length === 0 ? <></> : (
				<section className='main'>
					<input id="toggle-all" className='toggle-all' type="checkbox" onChange={e => dispatch(toggleAll({completed: e.target.checked}))} />
					<label htmlFor='toggle-all'>Mark as all complete</label>
					<TodoList>
						{
							todos.map((t, index) =>
								<TodoItem key={index} {...t} dispatch={dispatch} />
							)
						}
					</TodoList>
				</section>
			)}
			{state.todos.length === 0 ? <></> : <Footer counter={count} dispatch={dispatch} nowShowing={state.nowShowing} />}
		</section>
	);
}

export default App;

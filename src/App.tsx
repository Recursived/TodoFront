import {useEffect, useReducer} from 'react';
import {initTodos, toggleAll} from './actions';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoItem/TodoList';
import {initState, todoReducer} from './reducer';
import useIsFirstRender from './utils/first-render-hook';
import {loadData, saveData} from './utils/functools';


function App() {
	const isFirst = useIsFirstRender();
	const [state, dispatch] = useReducer(todoReducer, initState)

	useEffect(() => {
		dispatch(initTodos({todos :loadData("todoapp")}));
	}, [])

	useEffect(() => {
		console.log("state", state)
		saveData("todoapp", state.todos);
	}, [state.todos])
	//console.log(state)
	return (
		<section className='todoapp'>
			<Header dispatch={dispatch} />
			{state.todos.length == 0 ? <></> : (
				<section className='main'>
					<input id="toggle-all" className='toggle-all' type="checkbox" onChange={e => dispatch(toggleAll({completed: e.target.checked}))} />
					<label htmlFor='toggle-all'>Mark as all complete</label>
					<TodoList>
						{
							state.todos.map((t, index) =>
								<TodoItem key={index} {...t} dispatch={dispatch} />
							)
						}
					</TodoList>
				</section>
			)}
			{state.todos.length == 0 ? <></> : <Footer counter={state.todos.filter(t => t.completed === false).length} dispatch={dispatch} nowShowing={state.nowShowing}/>}
		</section>
	);
}

export default App;

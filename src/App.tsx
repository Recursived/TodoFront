import {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoItem/TodoList';
import {TodoModel} from './models/TodoModel';

function App() {
	const [todos, setTodos] = useState<TodoModel[]>([
		{
			id: "1",
			title: "Do the dishes",
			completed: false
		}
	]);
	return (
		<section className='todoapp'>
			<Header />
			{todos.length == 0 ? <></> : (
				<section className='main'>
					<input id="toggle-all" className='toggle-all' type="checkbox" />
					<label htmlFor='toggle-all'>Mark as all complete</label>
					<TodoList>
						{
							todos.map((t, index) =>
								<TodoItem key={index} {...t} />
							)
						}
					</TodoList>
				</section>
			)}
			{todos.length == 0 ? <></> : <Footer />}
		</section>
	);
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoItem/TodoList';
import {TodoModel} from './models/TodoModel';

function App() {
	const todos : TodoModel[] = [
		{
			id:"1",
			title: "Do the dishes",
			completed: false
		},
		{
			id:"2",
			title: "Walk the dog",
			completed: false
		},
		{
			id:"3",
			title: "Buy gift for the birthday",
			completed: false
		},
		{
			id:"4",
			title: "Buy groceries",
			completed: true
		},
	]
	return (
		<section className='todoapp'>
			<Header/>
			<section className='main'>
				<input id="toggle-all" className='toggle-all' type="checkbox" />
				<label htmlFor='toggle-all'>Mark as all complete</label>
				<TodoList>
					{
					todos.map((t, index) => 
						<TodoItem key={index} {...t}/>
					)
					}
				</TodoList>
			</section>
			<Footer/>
		</section>
	);
}

export default App;

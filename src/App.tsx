import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<section className='todoapp'>
			<Header/>
			<section className='main'>
				<input id="toggle-all" className='toggle-all' type="checkbox" />
				<label htmlFor='toggle-all'>Mark as all complete</label>
			</section>
			<Footer/>
		</section>
	);
}

export default App;

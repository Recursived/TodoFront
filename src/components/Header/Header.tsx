import {Dispatch, KeyboardEventHandler, useState} from "react";
import {addTodo} from "../../actions";
import {TodoAction} from "../../reducer";
import {uuid} from "../../utils/functools";

interface HeaderProps  {
	dispatch : Dispatch<TodoAction>
}
function Header({dispatch} : HeaderProps) {
	const [title, setTitle] = useState<string>("");
	const onEnterKeyDown : KeyboardEventHandler = (e) => {
		if (e.key !== "Enter") return;
		
		e.preventDefault();
		let val = title.trim();
		if (val) {
			dispatch(addTodo({
				id: uuid(),
				title: val,
				completed: false
			}));
			setTitle("");
		}
	};

	return (
		<header className="header">
			<h1>todos</h1>
			<input 
				className="new-todo" 
				placeholder="What needs to be done ?"
				autoFocus  
				value={title} 
				onChange={e => setTitle(e.target.value)}
				onKeyDown={onEnterKeyDown}
			/>
		</header>
	);
}

export default Header;

import classNames from "classnames";
import {Dispatch} from "react";
import {removeTodo, updateTodo} from "../../actions";
import {TodoModel} from "../../models/TodoModel";
import {TodoAction} from "../../reducer";

interface TodoItemProps extends TodoModel {
	dispatch: Dispatch<TodoAction>
}

function TodoItem({completed, title, id, dispatch}: TodoItemProps) {
	const onToggleChange = (e:any) => {
		dispatch(updateTodo({todo: {
			id: id,
			title: title,
			completed: e.target.checked,
		}}))
	}

	return (
		<li className={classNames({completed: completed})}>
			<div className="view">
				<input className="toggle" type="checkbox" checked={completed} onChange={onToggleChange}/>
				<label>{title}</label>
				<button className="destroy" onClick={(e) => dispatch(removeTodo({id: id}))}></button>
				<input className="edit" value={title} />
			</div>
		</li>
	);
}

export {TodoItem};

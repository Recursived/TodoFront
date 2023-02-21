import classNames from "classnames";

type TodoItemProps = {
	completed: boolean;
	title: string;
	id: string;
};

function TodoItem({completed, title, id}: TodoItemProps) {
	return (
		<ul className={classNames({completed: completed})}>
			<div className="view">
				<input className="toggle" type="checkbox"  checked={completed} />
				<label>{title}</label>
				<button className="destroy"></button>
				<input className="edit" value={title}/>
			</div>
		</ul>
	);
}

export default TodoItem;

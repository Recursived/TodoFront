import classNames from "classnames";
import {TodoModel} from "../../models/TodoModel";


function TodoItem({completed, title, id}: TodoModel) {
	return (
		<li className={classNames({completed: completed})}>
			<div className="view">
				<input className="toggle" type="checkbox"  checked={completed} />
				<label>{title}</label>
				<button className="destroy"></button>
				<input className="edit" value={title}/>
			</div>
		</li>
	);
}

export {TodoItem};

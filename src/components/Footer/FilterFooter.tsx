import classNames from "classnames";
import {Dispatch} from "react";
import {changeDisplayedTodos, clearCompletedTodos} from "../../actions";
import {TodoAction, TodoDisplayKind} from "../../reducer";

interface FilterFooterProps  {
	nowShowing: string
	dispatch: Dispatch<TodoAction>
};

function FilterFooter({nowShowing, dispatch} : FilterFooterProps){
	const onClickClearCompleted = () => dispatch(clearCompletedTodos());
	const onClickChangeFilter = (dk : TodoDisplayKind) => {
		dispatch(changeDisplayedTodos({
			nowShowing: dk
		}));
	}
	return (
		<ul className="filters">
			<li>
				<a
					href="#/"
					className={classNames({selected: nowShowing === TodoDisplayKind.ALL_TODOS})}
					onClick={() => onClickChangeFilter(TodoDisplayKind.ALL_TODOS)}
				>
				All
				</a>
			</li>
			{ ' ' }
			<li>
				<a
					href="#/active"
					className={classNames({selected: nowShowing === TodoDisplayKind.ACTIVE_TODO})}
					onClick={() => onClickChangeFilter(TodoDisplayKind.ACTIVE_TODO)}
				>
				Active
				</a>
			</li>
			{ ' ' }
			<li>
				<a
					href="#/completed"
					className={classNames({selected: nowShowing === TodoDisplayKind.COMPLETED_TODOS})}
					onClick={() => onClickChangeFilter(TodoDisplayKind.COMPLETED_TODOS)}
				>
				Completed 
				</a>
			</li>
			<button className="clear-completed" onClick={onClickClearCompleted}>Clear completed</button>
		</ul>
	);	
}

export default FilterFooter;

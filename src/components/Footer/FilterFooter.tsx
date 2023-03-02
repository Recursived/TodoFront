import classNames from "classnames";
import {Dispatch} from "react";
import {TodoAction} from "../../reducer";
import { 	
	ALL_TODOS,
	ACTIVE_TODO,
	COMPLETED_TODOS
} from "../../utils/constants";

interface FilterFooterProps  {
	nowShowing: string
	dispatch: Dispatch<TodoAction>
};

function FilterFooter({nowShowing, dispatch} : FilterFooterProps){
	return (
		<ul className="filters">
			<li>
				<a
					href="#/"
					className={classNames({selected: nowShowing === ALL_TODOS})}
				>
				All
				</a>
			</li>
			{ ' ' }
			<li>
				<a
					href="#/active"
					className={classNames({selected: nowShowing === ACTIVE_TODO})}
				>
				Active
				</a>
			</li>
			{ ' ' }
			<li>
				<a
					href="#/completed"
					className={classNames({selected: nowShowing === COMPLETED_TODOS})}
				>
				Completed 
				</a>
			</li>
			<button className="clear-completed">Clear completed</button>
		</ul>
	);	
}

export default FilterFooter;

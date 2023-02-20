import classNames from "classnames";
import { 	
	ALL_TODOS,
	ACTIVE_TODO,
	COMPLETED_TODOS
} from "../utils/constants";

type FilterFooterProps = {
	nowShowing: string
};

function FilterFooter({nowShowing} : FilterFooterProps){
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

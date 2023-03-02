import {pluralize} from "../../utils/functools";
// TODO : change path alias cuz relative path is yucky

interface TodoCountProps  {
	count : number
};

function TodoCount({count}: TodoCountProps){
	return (
		<span className="todo-count">
			<strong>{count}</strong> {pluralize(count, "item")} left
		</span>
	)
}

export default TodoCount;

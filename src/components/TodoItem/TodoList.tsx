import React, {ReactNode} from 'react';

interface TodoListProps  {
	children: ReactNode 
}

function TodoList({children} : TodoListProps){
	return (
		<ul className="todo-list">
			{children}
		</ul>
	);
}


export {TodoList};

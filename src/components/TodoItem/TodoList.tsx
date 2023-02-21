import React, {ReactNode} from 'react';

type TodoListProps = {
	children: ReactNode 
}

function TodoList({children} : TodoListProps){
	return (
		<ul className='todo-list'>
			{children}
		</ul>
	);
}


export default TodoList;

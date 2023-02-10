import React from "react"
import styled from 'styled-components';
import WidgetTodo from 'src/components/WidgetTodo';
import {store} from 'src/utils/db.service';
import {Todo} from "src/utils/seed";
import FormTodo from "src/components/FormTodo";

const ListTodo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;

`

function Homepage() {
	const [todos, setTodos, updateTodos] = store.useState("todos");
	const updateDone = (id: number) => {
		updateTodos(todos => {
			const index: number = todos.findIndex((t: Todo) => t.id == id);
			todos[index].done = !todos[index].done;
		});
	}
	return (
	<>
		<FormTodo adder={updateTodos} />
		<ListTodo>
			{todos.map((t: Todo, index: number) => (
				<WidgetTodo key={index} todo={t} updateTodo={updateDone} />
			))}
		</ListTodo>
	</>
	);
}


export default Homepage;

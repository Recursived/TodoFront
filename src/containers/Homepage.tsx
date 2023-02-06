import React from "react";
import styled from 'styled-components';
import WidgetTodo from 'src/components/WidgetTodo';
import { store } from  'src/utils/db.service';
import {Todo} from "src/utils/seed";

const ListTodo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;

`

function Homepage() {
	console.log(store !== null || store !== undefined);
	const [todos, setTodos, updateTodos] = store.useState("todos");
	console.log(todos);
	return (<ListTodo>
		{todos.map((t : Todo, index : number) => (
			<WidgetTodo key={index} todo={t} />
		))}
	</ListTodo>);
}  


export default Homepage;

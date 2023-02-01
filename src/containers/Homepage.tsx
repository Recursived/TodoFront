import React from "react";
import useFetch from "src/hooks/fetcher-hook";
import styled from 'styled-components';
import { getTodos } from "src/utils/todo.service";
import WidgetTodo from "src/components/WidgetTodo";

const ListTodo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;

`

function Homepage() {
	const { isLoading, payload, error } = useFetch(() => getTodos());

	return isLoading || payload === undefined ? <p>
		Loading todos
	</p> : (<ListTodo>
		{payload.map((todo, index) => (
			<WidgetTodo key={index} todo={todo}></WidgetTodo>
		))}
	</ListTodo>) ;
}  


export default Homepage;

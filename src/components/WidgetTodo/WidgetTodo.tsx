import React from "react";
import {Todo} from "src/utils/seed";
import styled from "styled-components";
import TitleTodo from "./TitleTodo";
import ContentTodo from "./ContentTodo";


const Card = styled.div`
	margin: 10px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
 `

 const TimeDisplayer = styled.div`
	color : darkgray;
	font-size: 20px;
 `

type WidgetTodoProps = {
	todo: Todo
}

function WidgetTodo(props: WidgetTodoProps) {
	return (
		<Card>
			<TimeDisplayer>Created on : {props.todo.createdAt.toLocaleDateString()}</TimeDisplayer>
			<TitleTodo title={props.todo.title} />
			<ContentTodo content={props.todo.content} />
		</Card>

	);
}

export default WidgetTodo;

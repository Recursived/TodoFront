import React, {useState} from "react";
import {Todo} from "src/utils/seed";
import styled from "styled-components";
import TitleTodo from "./TitleTodo";
import ContentTodo from "./ContentTodo";
import {FaCheckSquare, FaRegSquare} from 'react-icons/fa';

const Card = styled.div`
	margin: 10px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
 `


 const InfoDisplayer = styled.div<{ fs?: string, talign?: string }>`
	color : darkgray;
	font-size: ${props => props.fs || "20px"};
	text-align: ${props => props.talign || "center"};
 `

type WidgetTodoProps = {
	todo: Todo
}

function WidgetTodo(props: WidgetTodoProps) {
	const [validated, setIsValidated] = useState<boolean>(props.todo.done);
	return (
		<Card>
			<InfoDisplayer>Created on : {props.todo.createdAt.toLocaleDateString()}</InfoDisplayer>
			<TitleTodo title={props.todo.title} />
			<ContentTodo content={props.todo.content} />
			<InfoDisplayer talign="right" fs="40px">{validated ? <FaCheckSquare onClick={() => setIsValidated(!validated) } style={{marginRight: "20px"}}/> : <FaRegSquare onClick={() => setIsValidated(!validated) } style={{marginRight: "20px"}}/>}</InfoDisplayer>
		</Card>

	);
}

export default WidgetTodo;

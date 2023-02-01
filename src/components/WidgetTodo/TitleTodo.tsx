import React from "react";
import styled from "styled-components";

type TitleTodoProps = {
	title?: string 
};

const StyledTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: darkslategrey;
`;



function TitleTodo(props : TitleTodoProps) {
	return <StyledTitle>
		{props.title ? props.title : "Tâche à faire"}
	</StyledTitle>;
}

export default TitleTodo;

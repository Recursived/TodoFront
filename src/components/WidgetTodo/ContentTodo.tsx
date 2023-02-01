import React from "react";
import styled from "styled-components";

type ContentTodoProps = {
	content: string | null
}

const StyledDiv = styled.div`
  text-align: center;
  font-size: 20px;
  color: black;
  margin: 0 10px 20px 10px;

`;


function ContentTodo(props: ContentTodoProps) {
	return (<StyledDiv>
			{props.content}
		</StyledDiv>);
}

export default ContentTodo;

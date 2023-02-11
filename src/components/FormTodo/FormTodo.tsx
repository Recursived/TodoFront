import {useEffect, useRef, useState} from "react";
import ButtonForm from "src/components/FormTodo/ButtonForm";
import InputForm from "src/components/FormTodo/InputForm";
import {Todo} from "src/utils/seed";
import styled from "styled-components";

const FlexContainer = styled.div`
	display:flex;
	flex-direction:column;
	gap: 10px 20px;
	background: #363b45;
	padding: 10px 10px 10px 10px;
	border-radius: 10px;
	margin-top: 20px;
`

const WarningDiv = styled.div`
	background-color: #FEE;
	border: 1px solid #EDD;
	color: #A66;
	display: none;
	border-radius: 8px;
	padding: 10px;
	font-size: 22px;
`

const SuccessDiv = styled.div`
	background-color: #EFE;
	border: 1px solid #DED;
	color: #9A9;
	display: none;
	border-radius: 8px;
	padding: 10px;
	font-size: 22px;
`

type FormTodoProps = {
	adder: (todos: any) => any;
};


function FormTodo(props: FormTodoProps) {
	const [clicked, setClicked] = useState<boolean>(false)
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const warningRef = useRef<HTMLDivElement>(null);
	const successRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (clicked) {
			setClicked(false);
			if (content.length != 0) {
				// On ajoute le nouveau Todo
				props.adder((todos: Todo[]) => {
					todos.push({
						id: todos.length + 1,
						title: title ? title : undefined,
						done: false,
						createdAt: new Date(),
						updatedAt: new Date(),
						content: content,
					})
				});
				setTitle("");
				setContent("");

				successRef.current!.style.display = "block";
				setTimeout(() => {successRef.current!.style.display = "none"}, 5000);
			} else {
				warningRef.current!.style.display = "block";
				setTimeout(() => {warningRef.current!.style.display = "none"}, 5000);
			}
		}
	}, [clicked]);

	return (
		<FlexContainer>
			<InputForm title={title} content={content} setTitle={setTitle} setContent={setContent} />
			<ButtonForm setClicked={setClicked} />
			<WarningDiv ref={warningRef}>Content field is empty. Consider adding something</WarningDiv>
			<SuccessDiv ref={successRef}>Todo has been added to the list</SuccessDiv>
		</FlexContainer>

	)
}

export default FormTodo;

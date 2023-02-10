import React, {Dispatch, SetStateAction, useId} from "react";
import styled from "styled-components";
import { debounce } from "src/utils/event-handling";


const StyledTextArea = styled.textarea`
	font-size:16px
`

const StyledInput = styled.input`
	height: 40px;
	font-size:16px;
	gap: 10px 20px;
`


type InputFormProps = {
	setTitle: Dispatch<SetStateAction<string>>;
	setContent: Dispatch<SetStateAction<string>>; 
};

function InputForm(props : InputFormProps) {
	const inputId = useId();
	const textareaId = useId();

	const changeState = (func : Function, text: string) => {
		debounce(() => func(text));
	};

	return (
		<>
			<label htmlFor={inputId}>Todo title</label>
			<StyledInput onChange={e => changeState(props.setTitle, e.target.value)} type="text"/>
			<label htmlFor={textareaId}>Content of Todo</label>
			<StyledTextArea onChange={e => changeState(props.setContent, e.target.value)} rows={5} cols={60}></StyledTextArea>
		</>		
	);
}

export default InputForm;

import {Dispatch, SetStateAction, useId, useRef} from "react";
import styled from "styled-components";


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
	title: string,
	content: string
};

function InputForm(props : InputFormProps) {
	const inputId = useId();
	const textareaId = useId();
	return (
		<>
			<label htmlFor={inputId}>Todo title</label>
			<StyledInput value={props.title} onChange={e => props.setTitle(e.target.value)} type="text"/>
			<label htmlFor={textareaId}>Content of Todo</label>
			<StyledTextArea value={props.content} onChange={e => props.setContent(e.target.value) } rows={5} cols={60}/>
		</>		
	);
}

export default InputForm;

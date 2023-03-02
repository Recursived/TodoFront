import {Dispatch} from "react";
import {TodoAction} from "../../reducer";
import FilterFooter from "./FilterFooter";
import TodoCount from "./TodoCount";

// TODO : change count props to be the length of the array of todos
interface FooterProps {
	counter: number
	nowShowing: string
	dispatch: Dispatch<TodoAction>
}

function Footer({counter, nowShowing, dispatch} : FooterProps){
	return (
		<footer className="footer">		
			<TodoCount count={counter}/>
			<FilterFooter nowShowing={nowShowing} dispatch={dispatch}/>
		</footer>
		);
}

export default Footer;

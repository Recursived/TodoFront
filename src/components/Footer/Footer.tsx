import FilterFooter from "./FilterFooter";
import TodoCount from "./TodoCount";

// TODO : change count props to be the length of the array of todos

function Footer(){
	return (
		<footer className="footer">		
			<TodoCount count={0}/>
			<FilterFooter nowShowing={""}/>
		</footer>
		);
}

export default Footer;

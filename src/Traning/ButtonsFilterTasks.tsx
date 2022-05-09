import React from "react";
import {FilterType} from "./Tasks";

type ButtonsFilterTasksType = {
	 onClickHundler: (name: FilterType) => void
}

const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {

	 let showAll = () => {
			props.onClickHundler('All')
	 }
	 let showActive = () => {
			props.onClickHundler('Active')
	 }
	 let showChecked = () => {
			props.onClickHundler('Checked')
	 }

	 return <div>
			<button onClick={showAll}>All</button>
			<button onClick={showActive}>Active</button>
			<button onClick={showChecked}>Checked</button>
	 </div>
}
export default ButtonsFilterTasks
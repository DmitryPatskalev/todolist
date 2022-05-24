import React from "react";
import css from "./Style.module.css";
import {FilterType} from "./Tasks";

type ButtonFilterTasksType = {
	 changeFilter: (todoListId: string, value: FilterType) => void
	 filter: FilterType
	 todolistID: string
	 
}
const ButtonFilterTasks = (props: ButtonFilterTasksType) => {

	 let showAll = () => {
			props.changeFilter(props.todolistID, 'All')
	 }
	 let showActive = () => {
			props.changeFilter(props.todolistID, 'Active')
	 }
	 let showCompleted = () => {
			props.changeFilter(props.todolistID, 'Completed')
	 }
	 let activeAll = props.filter === 'All' ? css.active : ''
	 let activeActive = props.filter === 'Active' ? css.active : ''
	 let activeCompleted = props.filter === 'Completed' ? css.active : ''


	 return <div className={css.buttonsFilter}>
			<button className={activeAll}
							onClick={showAll} title='Show All Tasks'>All
			</button>
			<button className={activeActive}
							onClick={showActive} title='Show Active Tasks'>Active
			</button>
			<button className={activeCompleted}
							onClick={showCompleted} title='Show Completed Tasks'>Completed
			</button>
	 </div>
}
export default ButtonFilterTasks
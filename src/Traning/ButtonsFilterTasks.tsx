import React from "react";
import {FilterValueType} from "./Tasks";
import css from './style.module.css'

type ButtonsFilterTasksType = {
	 buttonFilterTask: (todoListId: string, value: FilterValueType) => void
	 filter: FilterValueType
	 todolistID: string
}

const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {

	 const showAll = () => {
			props.buttonFilterTask(props.todolistID, 'All')
	 }
	 const showActive = () => {
			props.buttonFilterTask(props.todolistID, 'Active')
	 }
	 const showCompleted = () => {
			props.buttonFilterTask(props.todolistID, 'Completed')
	 }
	 let activeAll = props.filter === 'All' ? css.activeButton : ''
	 let activeActive = props.filter === 'Active' ? css.activeButton : ''
	 let activeCompleted = props.filter === 'Completed' ? css.activeButton : ''


	 return <div className={css.buttonsFilter}>
			<button className={activeAll} onClick={showAll}>All</button>
			<button className={activeActive} onClick={showActive}>Active</button>
			<button className={activeCompleted} onClick={showCompleted}>Completed</button>

	 </div>
}
export default ButtonsFilterTasks
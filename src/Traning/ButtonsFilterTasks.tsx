import React from "react";
import {FilterType} from "./Tasks";
import css from './style.module.css'

type ButtonsFilterTasksType = {
	 buttonFilterTask: (name: FilterType) => void
	 filter: FilterType
}

const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {

	 const showAll = () => {
			props.buttonFilterTask('All')
	 }
	 const showActive = () => {
			props.buttonFilterTask('Active')
	 }
	 const showCompleted = () => {
			props.buttonFilterTask('Completed')
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
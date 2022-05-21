import React from "react";
import {FilterType} from "./Tasks";
import css from './style.module.css'

type ButtonsFilterTasksType = {
	 buttonFilterTask: (value: FilterType, todoListId: string) => void
	 filter: FilterType
	 id: string
}

const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {

	 const showAll = () => {
			props.buttonFilterTask('All', props.id)
	 }
	 const showActive = () => {
			props.buttonFilterTask('Active', props.id)
	 }
	 const showCompleted = () => {
			props.buttonFilterTask('Completed', props.id)
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
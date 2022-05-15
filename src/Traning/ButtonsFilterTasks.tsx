import React from "react";
import {FilterType} from "./Tasks";
import css from './style.module.css'

type ButtonsFilterTasksType = {
	 buttonFilterTask: (name: FilterType) => void
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


	 return <div>
			<button className={css.showAll} onClick={showAll}>All</button>
			<button className={css.showActive} onClick={showActive}>Active</button>
			<button className={css.showCompleted} onClick={showCompleted}>Completed</button>

	 </div>
}
export default ButtonsFilterTasks
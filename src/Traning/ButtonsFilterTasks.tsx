import React from "react";
import {FilterTasksType} from "./Tasks";
import css from './style.module.css'


type ButtonsFilterTasksType = {
	 onChangeFilter: (title: FilterTasksType) => void
	 filter: FilterTasksType
}

export const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {
	 const showAll = () => {
			props.onChangeFilter('All')
	 }
	 const showActive = () => {
			props.onChangeFilter('Active')
	 }
	 const showCompleted = () => {
			props.onChangeFilter('Completed')
	 }

	 let activeAll = props.filter === 'All' ? css.activeButton : ''
	 let activeActive = props.filter === 'Active' ? css.activeButton : ''
	 let activeCompleted = props.filter === 'Completed' ? css.activeButton : ''


	 return <div className={css.buttonsFilter}>
			<button onClick={showAll} className={activeAll}>All</button>
			<button onClick={showActive} className={activeActive}>Active</button>
			<button onClick={showCompleted} className={activeCompleted}>Completed</button>

	 </div>
}

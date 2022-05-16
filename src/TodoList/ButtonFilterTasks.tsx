import React from "react";
import css from "./Style.module.css";
import {FilterType} from "./Tasks";

type ButtonFilterTasksType = {
	 changeFilter: (name: FilterType) => void
	 filter: FilterType
	 
}
const ButtonFilterTasks = (props: ButtonFilterTasksType) => {

	 let showAll = () => {
			props.changeFilter('All')
	 }
	 let showActive = () => {
			props.changeFilter('Active')
	 }
	 let showCompleted = () => {
			props.changeFilter('Completed')
	 }
	 let activeFilter = props.filter === 'All' ? css.active : ''
	 let activeActive = props.filter === 'Active' ? css.active : ''
	 let activeCompleted = props.filter === 'Completed' ? css.active : ''


	 return <div>
			<button className={activeFilter}
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
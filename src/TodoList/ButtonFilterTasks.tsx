import React from "react";
import css from "./Style.module.css";
import {FilterType} from "./Tasks";

type ButtonFilterTasksType = {
	 changeFilter: (value: FilterType, todoListId: string) => void
	 filter: FilterType
	 id: string


}
const ButtonFilterTasks = (props: ButtonFilterTasksType) => {

	 let showAll = () => {
			props.changeFilter('All', props.id)
	 }
	 let showActive = () => {
			props.changeFilter('Active', props.id)
	 }
	 let showCompleted = () => {
			props.changeFilter('Completed', props.id)
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
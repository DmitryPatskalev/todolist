import React from 'react';
import {FilterTaskType} from "./Tasks";
import css from './style.module.css'

type ButtonsFilterTasksType = {
	 onChangeFilter: (filter: FilterTaskType) => void
	 filter: FilterTaskType
}

const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {
	 const filterAll = () => {
			props.onChangeFilter('All')
	 }
	 const filterActive = () => {
			props.onChangeFilter('Active')
	 }
	 const filterCompleted = () => {
			props.onChangeFilter('Completed')
	 }
	 const showAll = props.filter === 'All' ? css.colorFilter : ''
	 const showActive = props.filter === 'Active' ? css.colorFilter : ''
	 const showCompleted = props.filter === 'Completed' ? css.colorFilter : ''

	 return (
		 <div>
				<button onClick={filterAll} className={showAll}>All</button>
				<button onClick={filterActive} className={showActive}>Active</button>
				<button onClick={filterCompleted} className={showCompleted}>Completed</button>
		 </div>
	 );
};

export default ButtonsFilterTasks;
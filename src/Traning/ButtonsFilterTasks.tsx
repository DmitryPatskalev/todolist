import React from 'react';
import {FilterTaskType} from "./Tasks";

type ButtonsFilterTasksType = {
	 onChangeFilter: (filter: FilterTaskType) => void
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

	 return (
		 <div>
				<button onClick={filterAll}>All</button>
				<button onClick={filterActive}>Active</button>
				<button onClick={filterCompleted}>Completed</button>
		 </div>
	 );
};

export default ButtonsFilterTasks;
import React from "react";
import css from "./Style.module.css";
import {FilterType} from "./Tasks";

type ButtonFilterTasksType = {
	 onClickHundler: (name: FilterType) => void
}
const ButtonFilterTasks = (props: ButtonFilterTasksType) => {
	 let showAll = () => {
			props.onClickHundler('All')
	 }
	 let showActive = () => {
			props.onClickHundler('Active')
	 }
	 let showCompleted = () => {
			props.onClickHundler('Completed')
	 }

	 return <div>
			<button className={css.buttonSortAll}
							onClick={showAll} title='Show All Tasks'>All
			</button>
			<button className={css.buttonSortActive}
							onClick={showActive} title='Show Active Tasks'>Active
			</button>
			<button className={css.buttonSortCompleted}
							onClick={showCompleted} title='Show Completed Tasks'>Completed
			</button>
	 </div>
}
export default ButtonFilterTasks
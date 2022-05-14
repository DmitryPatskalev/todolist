import React from "react";
import css from './style.module.css'
import {FilterType} from "./Tasks";

type ButtonsFilterTasksType = {
	 onClickFilterHundler: (name: FilterType) => void

}

const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {

	 const showAll = () => {
			props.onClickFilterHundler('All')
	 }
	 const showActive = () => {
			props.onClickFilterHundler('Active')
	 }
	 const showChecked = () => {
			props.onClickFilterHundler('Checked')
	 }

	 return <div>
			<button className={css.buttonShowAll} onClick={showAll}>All</button>
			<button className={css.buttonShowActive} onClick={showActive}>Active</button>
			<button className={css.buttonShowChecked} onClick={showChecked}>Checked</button>
	 </div>
}
export default ButtonsFilterTasks
import React from "react";
import {FilterTasksType} from "./Tasks";
import css from './style.module.css'
import {Button} from "@material-ui/core";


type ButtonsFilterTasksType = {
	 onChangeFilter: (todoListID: string, title: FilterTasksType) => void
	 filter: FilterTasksType
	 todoListID: string
}

export const ButtonsFilterTasks = (props: ButtonsFilterTasksType) => {
	 const showAll = () => {
			props.onChangeFilter(props.todoListID, 'All')
	 }
	 const showActive = () => {
			props.onChangeFilter(props.todoListID, 'Active')
	 }
	 const showCompleted = () => {
			props.onChangeFilter(props.todoListID, 'Completed')
	 }

	 // let activeAll = props.filter === 'All' ? 'contained' : 'text'
	 // let activeActive = props.filter === 'Active' ? css.activeButton : ''
	 // let activeCompleted = props.filter === 'Completed' ? css.activeButton : ''


	 return <div className={css.buttonsFilter}>
			<Button onClick={showAll} color={'primary'} variant={props.filter === 'All' ? 'contained' : 'text'}>All</Button>
			<Button onClick={showActive} color={'primary'}
							variant={props.filter === 'Active' ? 'contained' : 'text'}>Active</Button>
			<Button onClick={showCompleted} color={'primary'}
							variant={props.filter === 'Completed' ? 'contained' : 'text'}>Completed</Button>

	 </div>
}

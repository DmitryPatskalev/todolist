import React, {useCallback} from "react";
import css from "./Style.module.css";
import {} from "../trash/Tasks";
import {Button} from "@material-ui/core";
import {FilterType} from "../reducers/todoList-reducer";


type ButtonFilterTasksType = {
	 changeFilter: (todoListId: string, value: FilterType) => void
	 filter: FilterType
	 todolistID: string

}
const ButtonFilterTasks = React.memo((props: ButtonFilterTasksType) => {
	 let showAll = useCallback(() => {
			props.changeFilter(props.todolistID, 'All')
	 }, [props.changeFilter, props.todolistID])

	 let showActive = useCallback(() => {
			props.changeFilter(props.todolistID, 'Active')
	 }, [props.changeFilter, props.todolistID])

	 let showCompleted = useCallback(() => {
			props.changeFilter(props.todolistID, 'Completed')
	 }, [props.changeFilter, props.todolistID])
	 // let activeAll = props.filter === 'All' ? css.active : ''
	 // let activeActive = props.filter === 'Active' ? css.active : ''
	 // let activeCompleted = props.filter === 'Completed' ? css.active : ''


	 return <div className={css.buttonsFilter}>
			<Button variant={props.filter === 'All' ? 'contained' : 'text'}
							onClick={showAll} color={'primary'} title='Show All Tasks'>All
			</Button>
			<Button variant={props.filter === 'Active' ? 'contained' : 'text'}
							onClick={showActive} color={'primary'} title='Show Active Tasks'>Active
			</Button>
			<Button variant={props.filter === 'Completed' ? 'contained' : 'text'}
							onClick={showCompleted} color={'primary'} title='Show Completed Tasks'>Completed
			</Button>
	 </div>
})
export default ButtonFilterTasks
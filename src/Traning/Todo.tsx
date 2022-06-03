import React, {ChangeEvent} from "react";
import {FilterTasksType, TasksType} from "./Tasks";
import {AddItemForm} from "./AddItemForm";
import {ButtonsFilterTasks} from "./ButtonsFilterTasks";
import css from './style.module.css'
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";


type TodoListPropsType = {
	 todoListID: string
	 tasks: TasksType[]
	 title: string
	 buttonRemoveTasks: (todoListID: string, id: string) => void
	 onChangeFilter: (todoListID: string, title: FilterTasksType) => void
	 addTask: (todoListID: string, title: string) => void
	 filter: FilterTasksType
	 changeTaskStatus: (todoListID: string, taskID: string, isDone: boolean) => void
	 removeTodolist: (todoListID: string) => void
	 changeTaskTitle: (todoListID: string, id: string, newTitle: string) => void
	 changeTodoListTitle: (todoListID: string, newTitle: string) => void
}

export const TodoList = (props: TodoListPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			let removeTask = () => props.buttonRemoveTasks(props.todoListID, elem.id)
			let changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeTaskStatus(props.todoListID, elem.id, event.currentTarget.checked)
			}
			const onChangeTitleHundler = (newValue: string) => {
				 props.changeTaskTitle(props.todoListID, elem.id, newValue)
			}
			return <div key={index}>
				 <div className={elem.isDone ? css.isDone : ''}>
						<Checkbox onChange={changeChecked} checked={elem.isDone}/>
						<EditableSpan title={elem.title} onChange={onChangeTitleHundler}/>
						<IconButton onClick={removeTask}>
							 <Delete/>
						</IconButton>
				 </div>
			</div>
	 })
	 const removeTodoList = () => props.removeTodolist(props.todoListID)

	 const addTask = (title: string) => {
			props.addTask(props.todoListID, title)
	 }
	 const changeTodoListTitle = (newTitle: string) => {
			props.changeTodoListTitle(props.todoListID, newTitle)
	 }

	 return <div>
			<h3 className={css.title}>
				 <EditableSpan title={props.title} onChange={changeTodoListTitle}/>
				 <IconButton onClick={removeTodoList}><Delete/></IconButton>
			</h3>
			<AddItemForm addItem={addTask}/>
			<span>{listOfTasks}</span>
			<ButtonsFilterTasks onChangeFilter={props.onChangeFilter} filter={props.filter} todoListID={props.todoListID}/>
	 </div>

}



import React, {ChangeEvent} from 'react';
import css from './Style.module.css'
import {FilterType, Tasktype} from './Tasks'
import AddItemForm from "./AddItemForm";
import ButtonFilterTasks from "./ButtonFilterTasks";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TodolistPropsType = {
	 todolistID: string
	 title: string
	 tasks: Tasktype[]
	 removeTask: (todoListId: string, id: string) => void
	 changeFilter: (todoListId: string, value: FilterType) => void
	 addTask: (todoListId: string, title: string,) => void
	 changeStatus: (todoListId: string, taskId: string, isDone: boolean) => void
	 filter: FilterType
	 removeTodolist: (todoListId: string) => void
	 changeTaskTitle: (todoListId: string, id: string, newTitle: string) => void
	 changeTodoListTitle: (todoListId: string, newTitle: string) => void
}

const Todolist = (props: TodolistPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			const buttonRemoveTask = () => props.removeTask(props.todolistID, elem.id)
			const onChangeStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(props.todolistID, elem.id, event.currentTarget.checked)
			}
			const isDoneOpacity = elem.isDone ? css.isDone : '';

			const onChangeTitleHundler = (newTitle: string) => {
				 props.changeTaskTitle(props.todolistID, elem.id, newTitle)
			}

			return <div key={index} className={isDoneOpacity}>
				 <Checkbox onChange={onChangeStatusTask}
									 checked={elem.isDone}/>
				 <span className={css.titleTasks}>
						<EditableSpan title={elem.title} onChange={onChangeTitleHundler}/>
				 </span>
				 <IconButton onClick={buttonRemoveTask} title='Remove task'><Delete/></IconButton>
			</div>

	 })
	 const buttonRemoveTodoList = () => props.removeTodolist(props.todolistID)

	 const addTask = (newTitle: string) => {
			props.addTask(props.todolistID, newTitle)
	 }
	 const onChangeTodoList = (newTitle: string) => {
			props.changeTodoListTitle(props.todolistID, newTitle)
	 }


	 return (
		 <div>
				<h2 className={css.title}>
					 <EditableSpan title={props.title} onChange={onChangeTodoList}/>
					 <IconButton onClick={buttonRemoveTodoList} title='Remove TodoList'><Delete/></IconButton>
				</h2>
				<div>
					 <AddItemForm addItem={addTask}/>
				</div>
				<div>
					 {listOfTasks}
				</div>
				<div>
					 <ButtonFilterTasks changeFilter={props.changeFilter} filter={props.filter} todolistID={props.todolistID}/>
				</div>
		 </div>
	 );
};

export default Todolist;
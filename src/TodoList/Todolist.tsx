import React, {ChangeEvent} from 'react';
import css from './Style.module.css'
import {FilterType, Tasktype} from './Tasks'
import AddItemForm from "./AddItemForm";
import ButtonFilterTasks from "./ButtonFilterTasks";
import {EditableSpan} from "./EditableSpan";

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

			return <li key={index} className={isDoneOpacity}>
				 <input type='checkbox' onChange={onChangeStatusTask}
								checked={elem.isDone}/>
				 <span className={css.titleTasks}>
						<EditableSpan title={elem.title} onChange={onChangeTitleHundler}/>
				 </span>
				 <button className={css.buttonRemove} onClick={buttonRemoveTask} title='Remove task'>x</button>
			</li>

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
				<h3 className={css.title}>
					 <EditableSpan title={props.title} onChange={onChangeTodoList}/>
					 <button className={css.butRemTL} onClick={buttonRemoveTodoList}>x</button>
				</h3>
				<div>
					 <AddItemForm addItem={addTask}/>
				</div>
				<ul>
					 {listOfTasks}
				</ul>
				<div>
					 <ButtonFilterTasks changeFilter={props.changeFilter} filter={props.filter} todolistID={props.todolistID}/>
				</div>
		 </div>
	 );
};

export default Todolist;
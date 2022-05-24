import React, {ChangeEvent} from 'react';
import css from './Style.module.css'
import {FilterType, Tasktype} from './Tasks'
import AddTasks from "./AddTasks";
import ButtonFilterTasks from "./ButtonFilterTasks";

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
}

const Todolist = (props: TodolistPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			let buttonRemoveTask = () => props.removeTask(props.todolistID, elem.id)
			let onChangeStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(props.todolistID, elem.id, event.currentTarget.checked)
			}
			let isDoneOpacity = elem.isDone ? css.isDone : '';

			return <li key={index} className={isDoneOpacity}>
				 <input type='checkbox' onChange={onChangeStatusTask}
								checked={elem.isDone}/>
				 <span className={css.titleTasks}>{elem.title}</span>
				 <button className={css.buttonRemove} onClick={buttonRemoveTask} title='Remove task'>x</button>
			</li>

	 })
	 let buttonRemoveTodoList = () => props.removeTodolist(props.todolistID)

	 return (
		 <div>
				<h3 className={css.title}>{props.title}
					 <button className={css.butRemTL} onClick={buttonRemoveTodoList}>x</button>
				</h3>
				<div>
					 <AddTasks addTask={props.addTask} todolistID={props.todolistID}/>
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
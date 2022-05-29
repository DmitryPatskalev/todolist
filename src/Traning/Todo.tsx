import React, {ChangeEvent} from "react";
import {FilterTasksType, TasksType} from "./Tasks";
import {AddTasks} from "./AddTasks";
import {ButtonsFilterTasks} from "./ButtonsFilterTasks";
import css from './style.module.css'


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

}

export const TodoList = (props: TodoListPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			let removeTask = () => props.buttonRemoveTasks(props.todoListID, elem.id)
			let changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeTaskStatus(props.todoListID, elem.id, event.currentTarget.checked)
			}
			return <ul key={index}>
				 <li className={elem.isDone ? css.isDone : ''}>
						<input type='checkbox' onChange={changeChecked} checked={elem.isDone}/>
						{elem.title}
						<button onClick={removeTask} className={css.removeTask}>x</button>
				 </li>
			</ul>
	 })
	 const removeTodoList = () => props.removeTodolist(props.todoListID)

	 return <div>
			<h3 className={css.title}>{props.title}
				 <button onClick={removeTodoList} className={css.butRemTL}>x</button>
			</h3>

			<AddTasks addTasks={props.addTask} todoListID={props.todoListID}/>
			{listOfTasks}
			<ButtonsFilterTasks onChangeFilter={props.onChangeFilter} filter={props.filter} todoListID={props.todoListID}/>
	 </div>

}



import React, {ChangeEvent} from "react";
import {FilterType, TasksListType} from "./Tasks";
import AddTasks from "./AddTasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import css from './style.module.css'

type TaskType = {
	 task: Array<TasksListType>
	 buttonRemoveTask: (id: string) => void
	 onClickFilterHundler: (name: FilterType) => void
	 addTask: (title: string) => void
	 title: string
	 changeStatus: (taskId: string, isDone: boolean) => void

}

export const Todo = (props: TaskType) => {
	 let listOfTasks = props.task.map((elem, index) => {
			let removeTask = () => props.buttonRemoveTask(elem.id)
			let onChangeTaskStatus = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(elem.id, event.currentTarget.checked)
			}
			return <ul key={index}>
				 <li className={elem.isDone ? css.isDone : ''}>
						<input type='checkbox' onChange={onChangeTaskStatus} checked={elem.isDone}/>
						<span className={css.tasks}>{elem.tech}</span>
						<span>{elem.isDone}</span>
						<button onClick={removeTask}>x</button>
				 </li>
			</ul>
	 })

	 return <div>
			<h3 className={css.title}>{props.title}</h3>
			<AddTasks addTask={props.addTask}/>
			{listOfTasks}
			<div>
				 <ButtonsFilterTasks onClickFilterHundler={props.onClickFilterHundler}/>
			</div>
	 </div>

}
export default Todo


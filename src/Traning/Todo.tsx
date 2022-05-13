import React, {ChangeEvent} from "react";
import {FilterType, TasksListType} from "./Tasks";
import AddTasks from "./AddTasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";

type TaskType = {
	 task: Array<TasksListType>
	 buttonRemoveTask: (id: string) => void
	 onClickHundler: (name: FilterType) => void
	 addTask: (title: string) => void
	 title: string
	 changeStatus: (taskId: string, isDone: boolean) => void
}

export const Todo = (props: TaskType) => {

	 let listOfTasks = props.task.map((elem, index) => {
			let removeTask = () => props.buttonRemoveTask(elem.id)
			let changeCheck = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeStatus(elem.id, event.currentTarget.checked)
			}
			return <ul>
				 <li key={index}>
						<input type='checkbox' onChange={changeCheck} checked={elem.isDone}/>
						<span>{elem.tech}</span>
						<span>{elem.isDone}</span>
						<button onClick={removeTask}>x</button>
				 </li>
			</ul>
	 })

	 return <div>
			<h3>{props.title}</h3>
			<AddTasks addTask={props.addTask}/>
			{listOfTasks}
			<div>
				 <ButtonsFilterTasks onClickHundler={props.onClickHundler}/>
			</div>
	 </div>

}
export default Todo


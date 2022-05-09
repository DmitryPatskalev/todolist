import React from "react";
import {FilterType, TasksListType} from "./Tasks";
import AddTasks from "./AddTasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";

type TaskType = {
	 task: Array<TasksListType>
	 buttonRemoveTask: (id: string) => void
	 onClickHundler: (name: FilterType) => void
	 addTask: (title: string) => void
	 title: string
}

export const Todo = (props: TaskType) => {

	 let listOfTasks = props.task.map((elem, index) => {
			let removeTask = () => props.buttonRemoveTask(elem.id)
			return <ul>
				 <li key={index}>
						<input type='checkbox' checked={elem.isDone}/>
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


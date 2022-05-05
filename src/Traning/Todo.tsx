import React from "react";
import {FilterType} from "./Tasks";
import {AddTasks} from "./AddTasks";

export type TasksListType = {
	 id: string
	 tech: string
	 isDone: boolean
}
type TaskType = {
	 task: TasksListType[]
	 title: string
	 buttonRemoveTask: (id: string) => void
	 onClickHundler: (name: FilterType) => void
}

export const Todo = (props: TaskType) => {
	 let result = props.task.map((elem, index) => {
			let removeElem = () => props.buttonRemoveTask(elem.id)
			return <ul>
				 <li key={index}>
						<input type='checkbox' checked={elem.isDone}/>
						{elem.tech}
						<span>
							 <button onClick={removeElem}>x</button></span>
				 </li>
			</ul>
	 })

	 return <div>
			<h3>{props.title}</h3>
			<AddTasks/>
			{/*<input/>*/}
			{/*<button>+</button>*/}
			{result}
			<div>
				 <button onClick={() => (props.onClickHundler('All'))}>All</button>
				 <button onClick={() => (props.onClickHundler('Active'))}>Active</button>
				 <button onClick={() => (props.onClickHundler('Completed'))}>Completed</button>
			</div>

	 </div>

}


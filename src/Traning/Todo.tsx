import React from "react";
import {FilterType} from './Tasks'
import {AddTasks} from "./AddTasks";

type TodoType = {
	 title: string
	 tasks: TaskType[]
	 removeButton: (id: number) => void
	 onClickHundler: (name: FilterType) => void

}
type TaskType = {
	 id: number
	 tech: string
	 isDone: boolean
}

export const Todo = (props: TodoType) => {
	 return <div>
			<h3>{props.title}</h3>
			<AddTasks/>
			<ul>
				 {props.tasks.map((elem, index) => {
						return <li key={index}>
							 <input type='checkbox' checked={elem.isDone}/>
							 <span>{elem.tech}</span>
							 <button onClick={() => (props.removeButton(elem.id))}>x</button>
						</li>
				 })}
			</ul>
			<button onClick={() => (props.onClickHundler('All'))}>Show All</button>
			<button onClick={() => (props.onClickHundler('Active'))}>Show Active</button>
			<button onClick={() => (props.onClickHundler('Checked'))}>Show Checked</button>
	 </div>

}


import React from "react";
import {FilterType} from "./Tasks";

type ListType = {
	 id: number
	 tech: string
	 isDone: boolean

}

type TasksType = {
	 title: string
	 tasks: ListType[]
	 removeButton:(id:number)=>void
	 onClickHundler:(name: FilterType)=>void
}

export const Todo = (props:TasksType) => {
	 return <div>
			<h3>{props.title}</h3>
			<div>
				 <input/>
				 <button>+</button>
			</div>
			<div>
				 <ul>{props.tasks.map((elem, index) => {
						return <li key={index}>
							 <input type='checkbox' checked={elem.isDone}/>
							 <span>{elem.tech}</span>
							 <button onClick={()=>(props.removeButton(elem.id))}>x</button>
						</li>
				 })}
				 </ul>
			</div>
			<div>
				 <button onClick={()=>(props.onClickHundler('All'))}>Show All</button>
			</div>
			<div>
				 <button onClick={()=>(props.onClickHundler('Active'))}>Show Active</button>
			</div>
			<div>
				 <button onClick={()=>(props.onClickHundler('Checked'))}>Show Checked</button>
			</div>


	 </div>
}

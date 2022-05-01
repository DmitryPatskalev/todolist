import React from "react";

type TasksType = {
	 id:number
	 tech:string
	 isDone:boolean
}
type TodoType = {
	 title:string
	 tasks:TasksType[]
}


export const Todo = (props: TodoType)=>{
	 return <div>
			<h3>{props.title}</h3>
			<div>
				 <input/>
				 <button>+</button>
			</div>
			<div>
				 <ul>
						{props.tasks.map(elem=>
							<li><input type='checkbox' checked={elem.isDone}/><span>{elem.tech}</span></li>
						)}

				 </ul>
				 <button>All</button>
				 <button>Active</button>
				 <button>Completed</button>
			</div>
	 </div>
}

import React from "react";
import {TasksType} from "./Tasks";
import {AddTasks} from "./AddTasks";
import {ButtonsFilterTasks} from "./ButtonsFilterTasks";


type TodoListPropsType = {
	 tasks: TasksType[]
	 title: string

}

export const TodoList = (props: TodoListPropsType) => {
	 let listOfTasks = props.tasks.map((elem, index) => {
			return <ul key={index}>
				 <li>
						<input type='checkbox' checked={elem.isDone}/>
						{elem.title}
						<button>x</button>
				 </li>
			</ul>
	 })

	 return <div>
			<h3>{props.title}</h3>
			<AddTasks/>
			{listOfTasks}
			<ButtonsFilterTasks/>


	 </div>

}



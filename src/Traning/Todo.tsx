import React from 'react';
import {FilterTaskType, TasksType} from "./Tasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import AddItemForm from "./AddItemForm";

type TodoType = {
	 task: TasksType[]
	 title: string
	 removeTask: (id: string) => void
	 onChangeFilter: (filter: FilterTaskType) => void
	 addTask: (title: string) => void
}

const Todo = (props: TodoType) => {
	 const tasksList = props.task.map((elem, key) => {
			const removeTask = () => props.removeTask(elem.id)
			return <ul key={key}>
				 <li>
						<input type='checkbox' checked={elem.isDone}/>
						{elem.title}
						<span>
							 <button onClick={removeTask}>x</button>
						</span>
				 </li>
			</ul>
	 })

	 return (
		 <div>
				<h3>{props.title}</h3>
				<AddItemForm addTask={props.addTask}/>
				{tasksList}
				<ButtonsFilterTasks onChangeFilter={props.onChangeFilter}/>
		 </div>
	 );
};

export default Todo;
import React, {ChangeEvent} from 'react';
import {FilterTaskType, TasksType} from "./Tasks";
import ButtonsFilterTasks from "./ButtonsFilterTasks";
import AddItemForm from "./AddItemForm";

type TodoType = {
	 task: TasksType[]
	 title: string
	 removeTask: (id: string) => void
	 onChangeFilter: (filter: FilterTaskType) => void
	 addTask: (title: string) => void
	 filter: FilterTaskType
	 changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const Todo = (props: TodoType) => {
	 const tasksList = props.task.map((elem, key) => {
			const removeTask = () => props.removeTask(elem.id)
			const changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
				 props.changeTaskStatus(elem.id, event.currentTarget.checked)
			}
			return <ul key={key}>
				 <li>
						<input type='checkbox' onChange={changeChecked} checked={elem.isDone}/>
						{elem.title}
						<span>
							 <button onClick={removeTask}>x</button>
						</span>
				 </li>
			</ul>
	 })

	 return (
		 <div>
				<h3>
					 {props.title}
					 <span><button>x</button></span>
				</h3>

				<AddItemForm addTask={props.addTask}/>
				{tasksList}
				<ButtonsFilterTasks onChangeFilter={props.onChangeFilter} filter={props.filter}/>
		 </div>
	 );
};

export default Todo;
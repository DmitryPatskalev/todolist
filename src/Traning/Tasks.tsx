import React, {useState} from 'react';
import {v1} from "uuid";
import Todo from "./Todo";
import css from './style.module.css'

export type TasksType = {
	 id: string
	 title: string
	 isDone: boolean
}
export type FilterTaskType = 'All' | 'Active' | 'Completed';

const tasks = [
	 {id: v1(), title: 'React', isDone: true},
	 {id: v1(), title: 'JS', isDone: true},
	 {id: v1(), title: 'Type Script', isDone: false},
	 {id: v1(), title: 'HTML/CSS', isDone: true},
	 {id: v1(), title: 'Python', isDone: false},
]

const Tasks = () => {
	 const [task, setTask] = useState<Array<TasksType>>(tasks)
	 const [filter, setFilter] = useState<FilterTaskType>('All')

	 const removeTask = (id: string) => {
			setTask(task.filter(elem => elem.id !== id))
	 }
	 let filterTask = task
	 if (filter === 'Active') {
			filterTask = task.filter(elem => !elem.isDone)
	 }
	 if (filter === 'Completed') {
			filterTask = task.filter(elem => elem.isDone)
	 }
	 const onChangeFilter = (filter: FilterTaskType) => {
			setFilter(filter)
	 }
	 const addTask = (title: string) => {
			let newTask = {
				 id: v1(),
				 title,
				 isDone: false
			}
			setTask([newTask, ...task])
	 }
	 
	 return (
		 <div className={css.App}>
				<Todo
					task={filterTask}
					title='What I Learn'
					removeTask={removeTask}
					onChangeFilter={onChangeFilter}
					addTask={addTask}
				/>

		 </div>
	 );
};

export default Tasks;
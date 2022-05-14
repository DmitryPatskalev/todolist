import React, {useState} from "react";
import Todolist, {Tasktype} from "./Todolist";
import {v1} from "uuid";

export type FilterType = 'All' | 'Active' | 'Completed'

const Tasks = () => {
	 const tasks: Array<Tasktype> = [
			{id: v1(), title: 'HTML&CSS', isDone: true},
			{id: v1(), title: 'JS/TS', isDone: true},
			{id: v1(), title: 'React', isDone: false},
			{id: v1(), title: 'C#/C++', isDone: false},
			{id: v1(), title: 'Python', isDone: true},
	 ]

	 const [task, setTask] = useState(tasks)
	 const [filter, setFilter] = useState('All')

	 let filterTask = task
	 if (filter === 'Completed') {
			filterTask = task.filter(elem => elem.isDone)
	 }
	 if (filter === 'Active') {
			filterTask = task.filter(elem => !elem.isDone)
	 }
	 let onClickHundler = (name: string) => {
			setFilter(name)
	 }

	 let removeTask = (id: string) => {
			let removeElem = task.filter(elem => elem.id !== id)
			setTask(removeElem)
	 }

	 let addTask = (title: string) => {
			let newTasks = {
				 id: v1(),
				 title,
				 isDone: false
			}
			setTask([newTasks, ...task])
	 }


	 return (
		 <div className="App">
				<Todolist title='What I Learn'
									tasks={filterTask}
									removeTask={removeTask}
									onClickHundler={onClickHundler}
									nameButton='+'
									addTask={addTask}
				/>
		 </div>
	 );
}

export default Tasks;
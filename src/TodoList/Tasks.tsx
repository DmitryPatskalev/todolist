import React, {useState} from "react";
import Todolist from "./Todolist";
import {v1} from "uuid";


export type FilterType = 'All' | 'Active' | 'Completed'

export type Tasktype = {
	 id: string
	 title: string
	 isDone: boolean
}

const Tasks = () => {
	 const tasks: Array<Tasktype> = [
			{id: v1(), title: 'HTML&CSS', isDone: true},
			{id: v1(), title: 'JS/TS', isDone: true},
			{id: v1(), title: 'React', isDone: false},
			{id: v1(), title: 'C#/C++', isDone: false},
			{id: v1(), title: 'Python', isDone: true},
	 ]

	 const [task, setTask] = useState(tasks)
	 const [filter, setFilter] = useState<FilterType>('All')


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
	 let filterTask = task
	 if (filter === 'Completed') {
			filterTask = task.filter(elem => elem.isDone)
	 }
	 if (filter === 'Active') {
			filterTask = task.filter(elem => !elem.isDone)
	 }

	 const changeFilter = (value: FilterType) => {
			setFilter(value)
	 }

	 let changeStatus = (taskId: string, isDone: boolean) => {
			// setTask(task.map(t => t.id === taskId ? {...t, isDone} : t))
			let changeChecked = task.find(t => t.id === taskId)
			if (changeChecked) {
				 changeChecked.isDone = isDone
			}
			setTask([...task])
	 }


	 return (
		 <div className="App">
				<Todolist
					title='What I Learn'
					tasks={filterTask}
					removeTask={removeTask}
					changeFilter={changeFilter}
					filter={filter}
					addTask={addTask}
					changeStatus={changeStatus}
				/>


		 </div>
	 );
}

export default Tasks;
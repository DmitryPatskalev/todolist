import React, {useState} from "react";
import {v1} from "uuid";
import {TodoList} from "./Todo";


export type FilterTasksType = 'All' | 'Active' | 'Completed'

export type TasksType = {
	 id: string
	 title: string
	 isDone: boolean
}

const arrTasks: Array<TasksType> = [
	 {id: v1(), title: 'HTML&CSS', isDone: true},
	 {id: v1(), title: 'JS/TS', isDone: true},
	 {id: v1(), title: 'React', isDone: false},
	 {id: v1(), title: 'C#/C++', isDone: false},
	 {id: v1(), title: 'Python', isDone: true},
]


const TodoListTraning = () => {
	 const [tasks, setTasks] = useState(arrTasks)
	 const [filter, setFilter] = useState<FilterTasksType>('All')


	 const buttonRemoveTasks = (id: string) => {
			let removeElem = tasks.filter(elem => elem.id !== id)
			setTasks(removeElem)
	 }

	 let filterTask = tasks
	 if (filter === 'Active') {
			filterTask = tasks.filter(elem => !elem.isDone)
	 }
	 if (filter === 'Completed') {
			filterTask = tasks.filter(elem => elem.isDone)
	 }
	 const onChangeFilter = (title: FilterTasksType) => {
			setFilter(title)
	 }

	 const addTask = (title: string) => {
			let addTitle = {
				 id: v1(),
				 title,
				 isDone: true
			}
			setTasks([addTitle, ...tasks])
	 }

	 const changeTaskStatus = (taskID: string, isDone: boolean) => {
			let changeChecked = tasks.find(elem => elem.id === taskID)
			if (changeChecked) {
				 changeChecked.isDone = isDone
				 setTasks([...tasks])
			}
	 }


	 return <div className='App'>
			<TodoList
				tasks={filterTask}
				title='What to Learn'
				buttonRemoveTasks={buttonRemoveTasks}
				onChangeFilter={onChangeFilter}
				addTask={addTask}
				filter={filter}
				changeTaskStatus={changeTaskStatus}
			/>

	 </div>
}

export default TodoListTraning


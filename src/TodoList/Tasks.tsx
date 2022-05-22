import React, {useState} from "react";
import Todolist from "./Todolist";
import {v1} from "uuid";


export type FilterType = 'All' | 'Active' | 'Completed'

export type Tasktype = {
	 id: string
	 title: string
	 isDone: boolean
}
export type TodoListsType = {
	 id: string
	 title: string
	 filter: FilterType
}

const Tasks = () => {

	 const todoListId1 = v1()
	 const todoListId2 = v1()

	 const [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
			{id: todoListId1, title: 'What I learn', filter: 'All'},
			{id: todoListId2, title: 'What I buy', filter: 'All'},
	 ])

	 const [task, setTask] = useState({
			[todoListId1]: [
				 {id: v1(), title: 'HTML&CSS', isDone: true},
				 {id: v1(), title: 'JS/TS', isDone: true},
				 {id: v1(), title: 'React', isDone: false},
				 {id: v1(), title: 'C#/C++', isDone: false},
				 {id: v1(), title: 'Python', isDone: true},
			],
			[todoListId2]: [
				 {id: v1(), title: 'React Book', isDone: true},
				 {id: v1(), title: 'Python Algoritms', isDone: true},
				 {id: v1(), title: 'JS Advance', isDone: false},
			]
	 })

	 const removeTask = (id: string, todoListId: string) => {
			let todoListTasks = task[todoListId]
			task[todoListId] = todoListTasks.filter(elem => elem.id !== id)
			setTask({...task})
	 }

	 const addTask = (title: string, todoListId: string) => {
			let newTasks = {
				 id: v1(),
				 title,
				 isDone: false
			}
			let todoListTasks = task[todoListId]
			task[todoListId] = [newTasks, ...todoListTasks]
			setTask({...task})
	 }


	 const changeFilter = (value: FilterType, todoListId: string) => {
			let filterButton = todoLists.find(tl => tl.id === todoListId)
			if (filterButton) {
				 filterButton.filter = value
				 setTodoLists([...todoLists])
			}
	 }

	 const changeStatus = (taskId: string, isDone: boolean, todoListId: string) => {
			// setTask(task.map(t => t.id === taskId ? {...t, isDone} : t))
			let todoListTasks = task[todoListId]
			let changeChecked = todoListTasks.find(t => t.id === taskId)
			if (changeChecked) {
				 changeChecked.isDone = isDone
			}
			setTask({...task})
	 }

	 const removeTodolist = (todoListId: string) => {
			let filterTodoList = todoLists.filter(tl => tl.id !== todoListId)
			setTodoLists(filterTodoList)
			delete task[todoListId]
			setTask({...task})
	 }

	 return (
		 <div className="App">
				{todoLists.map(tl => {
					 let filterTask = task[tl.id]
					 if (tl.filter === 'Completed') {
							filterTask = filterTask.filter(elem => elem.isDone)
					 }
					 if (tl.filter === 'Active') {
							filterTask = filterTask.filter(elem => !elem.isDone)
					 }
					 return <Todolist
						 key={tl.id}
						 id={tl.id}
						 title={tl.title}
						 tasks={filterTask}
						 removeTask={removeTask}
						 changeFilter={changeFilter}
						 filter={tl.filter}
						 addTask={addTask}
						 changeStatus={changeStatus}
						 removeTodolist={removeTodolist}
					 />
				})}


		 </div>
	 );
}

export default Tasks;
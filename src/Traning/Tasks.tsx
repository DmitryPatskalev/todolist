import React, {useState} from "react";
import {v1} from "uuid";
import TodoList from "./Todo";
import css from './style.module.css'

export type TasksType = {
	 id: string
	 title: string
	 isDone: boolean
}
type TodoListsType = {
	 id: string
	 title: string
	 filter: FilterValueType
}

export type FilterValueType = 'All' | 'Active' | 'Completed'

type TaskStateType = {
	 [todoListId: string]: Array<TasksType>
}

const Tasks = () => {

	 const todoListId1 = v1()
	 const todoListId2 = v1()

	 const [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
			{id: todoListId1, title: 'What I Learn', filter: 'All'},
			{id: todoListId2, title: 'What to buy', filter: 'All'}
	 ])
	 const [task, setTask] = useState<TaskStateType>({
			[todoListId1]: [
				 {id: v1(), title: 'HTML/CSS', isDone: true},
				 {id: v1(), title: 'JS', isDone: true},
				 {id: v1(), title: 'REACT', isDone: false},
				 {id: v1(), title: 'Python', isDone: true},
				 {id: v1(), title: 'C#/C++', isDone: false}
			],
			[todoListId2]: [
				 {id: v1(), title: 'Book', isDone: true},
				 {id: v1(), title: 'Car', isDone: true},
				 {id: v1(), title: 'Ticket to travel', isDone: false},
			]
	 })

	 const buttonRemoveTask = (todoListId: string, taskId: string) => {
			let todoListTasks = task[todoListId]
			task[todoListId] = todoListTasks.filter(tl => tl.id !== taskId)
			setTask({...task})

	 }

	 const addTasks = (todoListId: string, title: string) => {
			let newTask = {
				 id: v1(),
				 title,
				 isDone: false
			}
			let todoListTasks = task[todoListId]
			task[todoListId] = [newTask, ...todoListTasks]
			setTask({...task})
	 }

	 const changeStatus = (todoListId: string, taskId: string, isDone: boolean) => {
			setTask({...task, [todoListId]: task[todoListId].map(tl => tl.id === taskId ? {...tl, isDone} : tl)})
			// let todoListTasks = task[todoListId]
			// let changeChecked = todoListTasks.find(tl => tl.id === taskId)
			// if (changeChecked) {
			// 	 changeChecked.isDone = isDone
			// 	 setTask({...task})
			// }
	 }
	 const buttonFilterTask = (todoListId: string, value: FilterValueType) => {
			setTodoLists(todoLists.map(tl => tl.id === todoListId ? {...tl, filter: value} : tl))
			// let filterTodolist = todoLists.find(tl => tl.id === todoListId)
			// if (filterTodolist) {
			// 	 filterTodolist.filter = value
			// 	 setTodoLists([...todoLists])
			// }
	 }

	 const removeTodoList = (todoListId: string) => {
			let filterTodolist = todoLists.filter(tl => tl.id !== todoListId)
			setTodoLists(filterTodolist)
			delete task[todoListId]
			setTask({...task})
	 }

	 return <div className='App'>

			{todoLists.length ? todoLists.map(tl => {
				 let filterTasks = task[tl.id]
				 if (tl.filter === 'Active') {
						filterTasks = filterTasks.filter(elem => !elem.isDone)
				 }
				 if (tl.filter === 'Completed') {
						filterTasks = filterTasks.filter(elem => elem.isDone)
				 }
				 return <TodoList
					 key={tl.id}
					 todolistID={tl.id}
					 title={tl.title}
					 tasks={filterTasks}
					 buttonRemoveTask={buttonRemoveTask}
					 buttonFilterTask={buttonFilterTask}
					 addTasks={addTasks}
					 changeStatus={changeStatus}
					 filter={tl.filter}
					 removeTodoList={removeTodoList}
				 />
			}) : <span className={css.empty}>Create your first todoList</span>}
	 </div>
}

export default Tasks


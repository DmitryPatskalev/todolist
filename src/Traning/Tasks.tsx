import React, {useState} from 'react';
import {v1} from "uuid";
import Todo from "./Todo";
import css from './style.module.css'
import AddItemForm from "./AddItemForm";

export type TasksType = {
	 id: string
	 title: string
	 isDone: boolean
}
export type FilterTaskType = 'All' | 'Active' | 'Completed';

export type TodoListType = {
	 id: string
	 title: string
	 filter: FilterTaskType
}

export type GeneralTodolist = {
	 [key: string]: Array<TasksType>
}

const Tasks = () => {
	 const todoListID1 = v1()
	 const todoListID2 = v1()

	 const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
			{id: todoListID1, title: 'What I Learn', filter: 'All'},
			{id: todoListID2, title: 'What to Buy', filter: 'All'},
	 ])

	 const [task, setTask] = useState<GeneralTodolist>({
			[todoListID1]: [
				 {id: v1(), title: 'React', isDone: true},
				 {id: v1(), title: 'JS', isDone: true},
				 {id: v1(), title: 'Type Script', isDone: false},
				 {id: v1(), title: 'HTML/CSS', isDone: true},
				 {id: v1(), title: 'Python', isDone: false},
			],
			[todoListID2]: [
				 {id: v1(), title: 'Algoritms', isDone: true},
				 {id: v1(), title: 'JS Advance', isDone: true},
				 {id: v1(), title: 'Angular', isDone: false},
				 {id: v1(), title: 'Scala', isDone: true},
			]
	 })

	 const removeTask = (todoListID: string, id: string) => {
			setTask({...task, [todoListID]: task[todoListID].filter(elem => elem.id !== id)})
	 }
	 const removeTodoList = (todoListID: string) => {
			setTodoLists(todoLists.filter(elem => elem.id !== todoListID))
			delete task[todoListID]
			setTask({...task})
	 }

	 const onChangeFilter = (todoListID: string, filter: FilterTaskType) => {
			setTodoLists(todoLists.map(elem => elem.id === todoListID ? {...elem, filter} : elem))
	 }

	 const addTask = (todoListID: string, title: string) => {
			let newTask = {
				 id: v1(),
				 title,
				 isDone: false
			}
			let todoListObj = task[todoListID]
			task[todoListID] = [newTask, ...todoListObj]
			setTask({...task})
	 }
	 const addTodoList = (title: string) => {
			let newTodoList: TodoListType = {
				 id: v1(),
				 title,
				 filter: 'All'
			}
			setTodoLists([newTodoList, ...todoLists])
			setTask({
				 ...task,
				 [newTodoList.id]: []
			})
	 }

	 const changeTaskStatus = (todoListID: string, taskID: string, isDone: boolean) => {
			setTask({...task, [todoListID]: task[todoListID].map(elem => elem.id === taskID ? {...elem, isDone} : elem)})
	 }

	 const changeTaskTitle = (todoListID: string, taskID: string, newTitle: string) => {
			setTask({
				 ...task,
				 [todoListID]: task[todoListID].map(elem => elem.id === taskID ? {...elem, title: newTitle} : elem)
			})
	 }
	 const changeTodoListTitle = (todoListID: string, newTitle: string) => {
			setTodoLists(todoLists.map(elem => elem.id === todoListID ? {...elem, title: newTitle} : elem))
	 }

	 return (
		 <div className={css.App}>
				<h3>Create TodoList</h3>
				<AddItemForm addTask={addTodoList}/>
				{todoLists.length ? todoLists.map(tl => {
					 let filterTask = task[tl.id]
					 if (tl.filter === 'Active') {
							filterTask = filterTask.filter(elem => !elem.isDone)
					 }
					 if (tl.filter === 'Completed') {
							filterTask = filterTask.filter(elem => elem.isDone)
					 }
					 return <Todo
						 key={tl.id}
						 todoListID={tl.id}
						 task={filterTask}
						 title={tl.title}
						 removeTask={removeTask}
						 onChangeFilter={onChangeFilter}
						 addTask={addTask}
						 filter={tl.filter}
						 changeTaskStatus={changeTaskStatus}
						 removeTodoList={removeTodoList}
						 changeTaskTitle={changeTaskTitle}
						 changeTodoListTitle={changeTodoListTitle}
					 />
				}) : <span>Create New TodoList</span>}


		 </div>
	 );
};

export default Tasks;
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

type TodoListType = {
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

	 const [todoLists, setTodolists] = useState<Array<TodoListType>>([
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
	 const changeTaskStatus = (taskID: string, isDone: boolean) => {
			setTask(task.map(elem => elem.id === taskID ? {...elem, isDone} : elem))
	 }

	 return (
		 <div className={css.App}>
				{todoLists.map(tl => {
					 let filterTask = task[tl.id]
					 if (tl.filter === 'Active') {
							filterTask = filterTask.filter(elem => !elem.isDone)
					 }
					 if (tl.filter === 'Completed') {
							filterTask = filterTask.filter(elem => elem.isDone)
					 }
					 return <Todo
						 key={tl.id}
						 task={filterTask}
						 title={tl.title}
						 removeTask={removeTask}
						 onChangeFilter={onChangeFilter}
						 addTask={addTask}
						 filter={tl.filter}
						 changeTaskStatus={changeTaskStatus}
					 />
				})}


		 </div>
	 );
};

export default Tasks;
import React, {useState} from "react";
import {v1} from "uuid";
import {TodoList} from "./Todo";


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


	 return <div className='App'>
			<TodoList tasks={tasks} title='What to Learn'/>


	 </div>
}

export default TodoListTraning


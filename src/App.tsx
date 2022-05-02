import React, {useState} from 'react';
import './App.css';
import Todolist, {Tasktype} from "./Todolist";

export type FilterType = 'All' | 'Active' | 'Completed'

function App() {
	 const tasks: Array<Tasktype> = [
			{id: 1, title: 'HTML&CSS', isDone: true},
			{id: 2, title: 'JS/TS', isDone: true},
			{id: 3, title: 'React', isDone: false},
			{id: 4, title: 'C#/C++', isDone: false},
			{id: 5, title: 'Python', isDone: true},
	 ]

	 const [task, setTask] = useState(tasks)
	 const [filter, setFilter] = useState('All')
	 let filterTask = task
	 if (filter === 'Active') {
			filterTask = task.filter(elem => elem.isDone)
	 }
	 if (filter === 'Completed') {
			filterTask = task.filter(elem => !elem.isDone)
	 }
	 let onClickHundler = (name: string) => {
			setFilter(name)
	 }

	 let removeTask = (id: number) => {
			let removeElem = task.filter(elem => elem.id !== id)
			setTask(removeElem)
	 }
	 return (
		 <div className="App">
				<Todolist title='What I Learn'
									tasks={filterTask}
									removeTask={removeTask}
									onClickHundler={onClickHundler}
				/>
		 </div>
	 );
}

export default App;

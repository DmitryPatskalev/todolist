import React from "react";
import './../App.css'
import {Todo} from "./Todo";


const Tasks = () => {
	 const task1 = [
			{id: 1, tech: 'HTML/CSS', isDone: true},
			{id: 2, tech: 'JS', isDone: true},
			{id: 3, tech: 'REACT', isDone: false}
	 ]
	 const task2 = [
			{id: 1, tech: 'Java', isDone: true},
			{id: 2, tech: 'Skala', isDone: false},
			{id: 3, tech: '.Net', isDone: true},

	 ]
	 const task3 = [
			{id: 1, tech: 'C#', isDone: true},
			{id: 2, tech: 'C++', isDone: true},
			{id: 3, tech: 'Python', isDone: false}
	 ]

	 return <div className='App'>
			<Todo title='What I Learn' tasks={task1}/>
			<Todo title='What You Learn' tasks={task2}/>
			<Todo title='What He Learns' tasks={task3}/>


	 </div>
}
export default Tasks
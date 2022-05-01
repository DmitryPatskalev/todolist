import React from 'react';
import './App.css';
import Todolist from "./Todolist";


function App() {
	const task1= [
		{id: 1, title: 'HTML&CSS', isDone: true},
		{id: 2, title: 'JS/TS', isDone: false},
		{id: 3, title: 'React', isDone: false},
	]
	 const task2 = [
		{id: 1, title: 'Java', isDone: true},
		{id: 2, title: 'Python', isDone: false},
		{id: 3, title: 'Skala', isDone: false},
	]
	 const task3 = [
		{id: 1, title: 'C#', isDone: true},
		{id: 2, title: 'C++', isDone: false},
		{id: 3, title: '.Net', isDone: true},
	]
	return (
		<div className="App">
			<Todolist title='What I Learn' tasks={task1}/>
			<Todolist title='What You Learn' tasks={task2}/>
			<Todolist title='What He Learns' tasks={task3}/>
		</div>
	);
}

export default App;

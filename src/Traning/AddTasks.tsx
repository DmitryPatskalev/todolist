import React, {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";


let messages: Array<string> = []

export const AddTasks = () => {

	 const [task, setTask] = useState(messages)
	 const [newTask, setNewTask] = useState('')

	 let result = task.map((elem, index) => {
			return <p key={index}>{elem}</p>
	 })
	 let addMessage = (newTask: string) => {
			setTask([newTask, ...task])
	 }
	 let callBackButton = () => {
			addMessage(newTask)
			setNewTask('')
	 }

	 return <div>
			<Input setNewTask={setNewTask} newTask={newTask}/>
			<Button name='+' callback={callBackButton}/>
			{result}

	 </div>
}
import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType} from "./Tasks";

export type TasksListType = {
	 id: string
	 tech: string
	 isDone: boolean
}
type TaskType = {
	 task: TasksListType[]
	 title: string
	 buttonRemoveTask: (id: string) => void
	 onClickHundler: (name: FilterType) => void
	 addTask: (name: string) => void

}

export const Todo = (props: TaskType) => {
	 const [message, setMessage] = useState('')
	 let result = props.task.map((elem, index) => {
			let removeElem = () => props.buttonRemoveTask(elem.id)
			return <ul>
				 <li key={index}>
						<input type='checkbox' checked={elem.isDone}/>
						{elem.tech}
						<span>
							 <button onClick={removeElem}>x</button></span>
				 </li>
			</ul>
	 })

	 const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setMessage(event.currentTarget.value)
	 }
	 const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 props.addTask(message)
				 setMessage('')
			}
	 }

	 let callBackButton = () => {
			props.addTask(message)
			setMessage('')
	 }
	 return <div>
			<h3>{props.title}</h3>
			<input value={message}
						 onChange={onChangeHundler}
						 onKeyPress={onKeyPressHandler}
			/>
			<button onClick={callBackButton}>+</button>
			{result}
			<div>
				 <button onClick={() => (props.onClickHundler('All'))}>All</button>
				 <button onClick={() => (props.onClickHundler('Active'))}>Active</button>
				 <button onClick={() => (props.onClickHundler('Completed'))}>Completed</button>
			</div>

	 </div>

}


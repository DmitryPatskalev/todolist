import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddTaskType = {
	 addTask: (name: string) => void
}

export const AddTasks = (props: AddTaskType) => {
	 const [message, setMessage] = useState('')

	 let callBackButton = () => {
			props.addTask(message)
			setMessage('')
	 }
	 let onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 setMessage(event.currentTarget.value)
				 setMessage('')
			}
	 }
	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setMessage(event.currentTarget.value)
	 }

	 return <div>
			<input onChange={onChangeHundler}
						 onKeyPress={onKeyPressHandler}/>
			<button onClick={callBackButton}>+</button>
	 </div>
}
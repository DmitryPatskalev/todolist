import React, {useState} from "react";
import {Input} from './Input'
import {Button} from "./Button";


type TextType = Array<any>
let text: TextType = []

export const AddTasks = () => {
	 const [value, setValue] = useState(text)
	 const [message, setMessage] = useState('')

	 let addText = value.map((elem, index) => {
			return <p key={index}>{elem}</p>
	 })

	 let addMessage = (message: string) => {
			setValue([message, ...value])
	 }
	 let callBackButton = () => {
			addMessage(message)
			setMessage('')
	 }

	 return <div>
			<Input message={message} setMessage={setMessage}/>
			<Button name='+' callback={callBackButton}/>

			{addText}

	 </div>
}
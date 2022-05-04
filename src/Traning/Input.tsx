import React, {ChangeEvent} from "react";

type InputType = {
	 newTask: string
	 setNewTask: (newTask: string) => void
}

export const Input = (props: InputType) => {
	 let onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
			props.setNewTask(event.currentTarget.value)
	 }
	 return <span>
			<input value={props.newTask} onChange={onChangeHandler}/>

	 </span>
}
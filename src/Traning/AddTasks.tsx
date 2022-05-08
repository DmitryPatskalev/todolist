import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddTasksType = {
	 addTask: (title: string) => void
}

export const AddTasks = (props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')

	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTask(event.currentTarget.value)
	 }

	 let onClickHundler = () => {
			props.addTask(newTask)
			setNewTask('')
	 }
	 let onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 props.addTask(newTask)
				 setNewTask('')
			}
	 }

	 return <div>
			<input value={newTask}
						 onChange={onChangeHundler}
						 onKeyPress={onKeyPressHundler}
			/>
			<button
				onClick={onClickHundler}>+
			</button>

	 </div>
}
export default AddTasks
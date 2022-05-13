import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddTasksType = {
	 addTask: (title: string) => void
}

export const AddTasks = (props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')


	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTask(event.currentTarget.value)
	 }

	 let onClickAddTask = () => {
			if (newTask.trim() === '') {
				 return;
			}
			props.addTask(newTask.trim())
			setNewTask('')
	 }
	 let onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 onClickAddTask()
				 setNewTask('')
			}
	 }

	 return <div>
			<input value={newTask}
						 onChange={onChangeHundler}
						 onKeyPress={onKeyPressHundler}
			/>
			<button
				onClick={onClickAddTask}>+
			</button>

	 </div>
}
export default AddTasks
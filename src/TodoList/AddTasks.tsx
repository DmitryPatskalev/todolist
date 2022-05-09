import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Style.module.css'


type AddTasksType = {
	 addTask: (title: string) => void
}

const AddTasks = (props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')

	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTask(event.currentTarget.value)
	 }
	 let onClickHundler = () => {
			props.addTask(newTask)
			setNewTask('')
	 }

	 let onPressKeyHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 props.addTask(event.currentTarget.value)
				 setNewTask('')
			}
	 }

	 return <div>
			<input
				value={newTask}
				onChange={onChangeHundler}
				onKeyPress={onPressKeyHundler}
			/>
			<button
				title='Add Task'
				className={css.addTask}
				onClick={onClickHundler}
			>+
			</button>

	 </div>
}
export default AddTasks
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Style.module.css'


type AddTasksType = {
	 addTask: (title: string) => void
}

const AddTasks = (props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>(null)

	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTask(event.currentTarget.value)
	 }
	 let onClickHundler = () => {
			if (newTask.trim() !== '') {
				 props.addTask(newTask.trim())
				 setNewTask('')
			} else {
				 setError('Please, enter the data')
			}
	 }

	 let onPressKeyHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			setError(null)
			if (event.charCode === 13) {
				 onClickHundler()
				 setNewTask('')
			}
	 }

	 return <div>
			<input
				className={error ? css.error : ''}
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
			<div className={error ? css.errorMessage : ''}>{error}</div>

	 </div>
}
export default AddTasks
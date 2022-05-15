import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './style.module.css'


type AddTasksType = {
	 addTasks: (title: string) => void
}
export const AddTasks = (props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>('')

	 const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setError(null)
			setNewTask(event.currentTarget.value)
	 }
	 const onClickHundler = () => {
			if (newTask.trim() !== '') {
				 props.addTasks(newTask.trim())
				 setNewTask('')
			} else {
				 setError('Please, enter the data')
			}

	 }
	 const onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 onClickHundler()
				 setNewTask('')
			}
	 }

	 return <div>
			<input className={error ? css.error : ''}
						 value={newTask}
						 onChange={onChangeHundler}
						 onKeyPress={onKeyPressHundler}/>
			<button
				className={css.addTask}
				onClick={onClickHundler}
			>+
			</button>
			<div className={error ? css.errorMessage : ''}>{error}</div>

	 </div>
}
export default AddTasks
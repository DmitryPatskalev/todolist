import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './style.module.css'


type AddTasksType = {
	 addTask: (title: string) => void
}

export const AddTasks = (props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>(null)


	 const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTask(event.currentTarget.value)
	 }

	 const onClickAddTask = () => {
			if (newTask.trim() !== '') {
				 props.addTask(newTask.trim())
				 setNewTask('')
			} else {
				 setError('Please, enter data')
			}

	 }
	 const onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			setError(null)
			if (event.charCode === 13) {
				 onClickAddTask()
			}
	 }

	 return <div>
			<input className={error ? css.error : ''}
						 value={newTask}
						 onChange={onChangeHundler}
						 onKeyPress={onKeyPressHundler}
			/>
			<button
				onClick={onClickAddTask}>+
			</button>
			{error && <div className={css.errorMessage}>{error}</div>}
	 </div>
}
export default AddTasks
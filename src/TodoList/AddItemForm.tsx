import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './Style.module.css'


type AddTasksType = {
	 addItem: (title: string) => void
}

const AddItemForm = (props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>(null)

	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTask(event.currentTarget.value)
	 }
	 let onClickAddTask = () => {
			if (newTask.trim() !== '') {
				 props.addItem(newTask.trim())
				 setNewTask('')
			} else {
				 setError('Please, enter the data')
			}
	 }

	 let onPressKeyHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			setError(null)
			if (event.charCode === 13) {
				 onClickAddTask()
				 setNewTask('')
			}
	 }
	 const styleInput = {
			width: '150px',
			height: '20px',
			borderRadius: '10px',
			paddingLeft: '10px',

	 }

	 return <div>
			<input
				style={styleInput}
				className={error ? css.error : ''}
				value={newTask}
				onChange={onChangeHundler}
				onKeyPress={onPressKeyHundler}
			/>
			<button
				title='Add Task'
				className={css.addTask}
				onClick={onClickAddTask}
			>+
			</button>
			<div className={error ? css.errorMessage : ''}>{error}</div>

	 </div>
}
export default AddItemForm
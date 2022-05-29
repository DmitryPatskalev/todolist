import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import css from './style.module.css'


type AddTasksPropsType = {
	 addItem: (title: string) => void
}

export const AddItemForm = (props: AddTasksPropsType) => {
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>(null)

	 const onClickHundler = () => {
			if (newTask.trim() !== '') {
				 props.addItem(newTask.trim())
				 setNewTask('')
			} else {
				 setError('Input the data')
			}
	 }

	 const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setError(null)
			setNewTask(event.currentTarget.value)
	 }

	 const onKeyHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 onClickHundler()
			}
	 }

	 return <div>
			<input
				className={error ? css.error : ''}
				value={newTask}
				onChange={onChangeHundler}
				onKeyPress={onKeyHundler}/>
			<span>
				 <button
					 onClick={onClickHundler}
					 className={css.buttonAddTask}
				 >+</button>
			</span>
			{error && <div className={css.errorMessage}>{error}</div>}
	 </div>
}

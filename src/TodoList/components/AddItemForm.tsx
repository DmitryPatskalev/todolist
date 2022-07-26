import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";


type AddTasksType = {
	 addItem: (title: string) => void
}

const AddItemForm = React.memo((props: AddTasksType) => {
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>(null)

	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setError(null)
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
			if (event.charCode === 13) {
				 onClickAddTask()
				 setNewTask('')
			}
	 }

	 return <div>
			<TextField
				variant={'outlined'}
				label={'Type value'}
				error={!!error}
				helperText={error}
				value={newTask}
				onChange={onChangeHundler}
				onKeyPress={onPressKeyHundler}
			/>
			<IconButton
				title='Add Task'
				onClick={onClickAddTask}
				color={'primary'}
			><ControlPoint/>
			</IconButton>
	 </div>
})
export default AddItemForm
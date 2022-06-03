import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";


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
			<TextField
				variant={'outlined'}
				error={!!error}
				helperText={error}
				label={'Type value'}
				value={newTask}
				onChange={onChangeHundler}
				onKeyPress={onKeyHundler}/>
			<span>
				 <IconButton
					 onClick={onClickHundler}
					 color={'primary'}
				 ><ControlPoint/>
				 </IconButton>
			</span>
	 </div>
}

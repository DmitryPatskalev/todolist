import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";


type AddItemFormType = {
	 addTask: (newTitle: string) => void
}

const AddItemForm = (props: AddItemFormType) => {
	 console.log('AddItemForm is called')
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>(null)

	 const onClickButton = () => {
			if (newTask.trim() !== '') {
				 props.addTask(newTask.trim())
				 setNewTask('')
			} else {
				 setError('Input the data')
			}
	 }
	 const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setError(null)
			setNewTask(event.currentTarget.value)
	 }
	 const onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.charCode === 13) {
				 onClickButton()
			}
	 }

	 return (
		 <div>
				<TextField
					variant={'outlined'}
					label={'Type value'}
					error={!!error}
					helperText={error}
					value={newTask}
					onChange={onChangeHundler}
					onKeyPress={onKeyPressHundler}
				/>
				<span>
					 <IconButton
						 onClick={onClickButton}
						 color='primary'
					 >
							<ControlPoint/>
					 </IconButton>
				</span>
		 </div>
	 );
};

export default AddItemForm;
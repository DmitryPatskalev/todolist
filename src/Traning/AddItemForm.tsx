import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemFormType = {
	 todoListID: string
	 addTask: (todoListID: string, title: string) => void
}

const AddItemForm = (props: AddItemFormType) => {
	 const [newTask, setNewTask] = useState('')
	 const [error, setError] = useState<string | null>(null)

	 const onClickButton = () => {
			if (newTask.trim() !== '') {
				 props.addTask(props.todoListID, newTask.trim())
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
				<input
					value={newTask}
					onChange={onChangeHundler}
					onKeyPress={onKeyPressHundler}
				/>
				<span>
					 <button onClick={onClickButton}>+</button>
				</span>
				{error && <div>{error}</div>}
		 </div>
	 );
};

export default AddItemForm;
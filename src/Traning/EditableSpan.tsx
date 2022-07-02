import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@material-ui/core";

type EditableSpan = {
	 title: string
	 onChange: (newValue: string) => void
}

const EditableSpanTrain = React.memo((props: EditableSpan) => {
	 console.log('EditableSpan')
	 const [isEdit, setIsEdit] = useState(false)
	 const [newTitle, setNewTitle] = useState('')

	 const activateIsEdit = () => {
			setIsEdit(true)
			setNewTitle(props.title)
	 }
	 const activateViewMode = () => {
			setIsEdit(false)
			props.onChange(newTitle)
	 }
	 const onChangeTitleHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTitle(event.currentTarget.value)
	 }

	 return isEdit ?
		 <TextField
			 value={newTitle}
			 onChange={onChangeTitleHundler}
			 onBlur={activateViewMode}
			 autoFocus
		 /> :
		 <span onDoubleClick={activateIsEdit}>{props.title}</span>

});

export default EditableSpanTrain;
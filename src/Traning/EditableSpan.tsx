import React, {ChangeEvent, useState} from 'react';

type EditableSpan = {
	 title: string
	 onChange: (newValue: string) => void
}

const EditableSpan = (props: EditableSpan) => {
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
		 <input
			 value={newTitle}
			 onChange={onChangeTitleHundler}
			 onBlur={activateViewMode}
			 autoFocus
		 /> :
		 <span onDoubleClick={activateIsEdit}>{props.title}</span>

};

export default EditableSpan;
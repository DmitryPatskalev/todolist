import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";


type EditableSpanType = {
	 title: string
	 onChange: (newValue: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {
	 const [isEdit, setIsEdit] = useState(false)
	 const [value, setValue] = useState('')

	 const activateIsEdit = () => {
			setIsEdit(true)
			setValue(props.title)
	 }
	 const activateViewMode = () => {
			setIsEdit(false)
			props.onChange(value)
	 }
	 const onChangeTitleHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setValue(event.currentTarget.value)
	 }

	 return isEdit ?
		 <TextField
			 value={value}
			 onChange={onChangeTitleHundler}
			 onBlur={activateViewMode}
			 autoFocus
		 /> :
		 <span onDoubleClick={activateIsEdit}>{props.title}</span>

}
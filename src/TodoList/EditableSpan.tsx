import React, {ChangeEvent, useState} from "react";
import css from "./Style.module.css";

type EditableSpanType = {
	 title: string
	 onChange: (newTitle: string) => void
}


export const EditableSpan = (props: EditableSpanType) => {
	 const [isEdit, setIsEdit] = useState<boolean>(false)
	 const [newTitle, setNewTitle] = useState('')

	 const activateIsEdit = () => {
			setIsEdit(true)
			setNewTitle(props.title)
	 }

	 const activateViewMode = () => {
			setIsEdit(false)
			props.onChange(newTitle)
	 }
	 const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
			setNewTitle(event.currentTarget.value)
	 }


	 return isEdit ?
		 <input className={css.editInput}
						value={newTitle}
						autoFocus
						onChange={onChangeTitle}
						onBlur={activateViewMode}
		 /> :
		 <span onDoubleClick={activateIsEdit}>{props.title}</span>


}
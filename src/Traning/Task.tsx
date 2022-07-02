import React, {ChangeEvent, useCallback} from "react";
import css from "./style.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpanTrain from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TasksType} from "./AppTraningRedux";

type TaskPropsType = {
	 changeTaskStatus: (todoListID: string, taskID: string, isDone: boolean) => void
	 changeTaskTitle: (todoListID: string, taskID: string, newTitle: string) => void
	 removeTask: (todoListID: string, id: string) => void
	 elem: TasksType
	 todoListID: string
}
export const Task = React.memo((props: TaskPropsType) => {
	 const removeTask = () => props.removeTask(props.todoListID, props.elem.id)
	 const changeChecked = (event: ChangeEvent<HTMLInputElement>) => {
			props.changeTaskStatus(props.todoListID, props.elem.id, event.currentTarget.checked)
	 }
	 const onChangeTaskTitle = useCallback((newTitle: string) => {
			props.changeTaskTitle(props.todoListID, props.elem.id, newTitle)
	 }, [props.changeTaskTitle, props.todoListID, props.elem.id])

	 return <div key={props.elem.id} className={props.elem.isDone ? css.isDone : ''}>
			<div className={css.title}>
				 <Checkbox color='primary' onChange={changeChecked} checked={props.elem.isDone}/>
				 <EditableSpanTrain title={props.elem.title} onChange={onChangeTaskTitle}/>
				 <span>
							 <IconButton onClick={removeTask}><Delete/></IconButton>
						</span>
			</div>
	 </div>

})
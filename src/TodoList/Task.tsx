import React, {ChangeEvent, useCallback} from "react";
import css from "./Style.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {Tasktype} from "./AppWithRedux";

type TaskPropsType = {
	 removeTask: (todoListId: string, id: string) => void
	 changeStatus: (todoListId: string, taskId: string, isDone: boolean) => void
	 changeTaskTitle: (todoListId: string, id: string, newTitle: string) => void
	 elem: Tasktype
	 todoListID: string
}
export const Task = React.memo((props: TaskPropsType) => {
	 console.log('Task is called')
	 const buttonRemoveTask = () => props.removeTask(props.todoListID, props.elem.id)

	 const onChangeStatusTask = useCallback((event: ChangeEvent<HTMLInputElement>) => {
			props.changeStatus(props.todoListID, props.elem.id, event.currentTarget.checked)
	 }, [props.changeStatus, props.todoListID, props.elem.id])

	 const onChangeTitleHundler = useCallback((newTitle: string) => {
			props.changeTaskTitle(props.todoListID, props.elem.id, newTitle)
	 }, [props.changeTaskTitle, props.todoListID, props.elem.id])

	 const isDoneOpacity = props.elem.isDone ? css.isDone : '';


	 return <div key={props.elem.id} className={isDoneOpacity}>
			<Checkbox onChange={onChangeStatusTask}
								checked={props.elem.isDone}/>
			<span className={css.titleTasks}>
						<EditableSpan title={props.elem.title} onChange={onChangeTitleHundler}/>
				 </span>
			<IconButton onClick={buttonRemoveTask} title='Remove task'><Delete/></IconButton>
	 </div>
})
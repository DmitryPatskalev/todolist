import React, {ChangeEvent, useCallback} from "react";
import css from "./Style.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";

import {TaskStatuses, TaskType} from "../stories/api/TodolistsAPI";

type TaskPropsType = {
	 removeTask: (todoListId: string, id: string) => void
	 changeStatus: (todoListId: string, taskId: string, status: TaskStatuses) => void
	 changeTaskTitle: (todoListId: string, id: string, newTitle: string) => void
	 elem: TaskType
	 todoListID: string
}
export const Task = React.memo((props: TaskPropsType) => {
	 const buttonRemoveTask = () => props.removeTask(props.todoListID, props.elem.id)

	 const onChangeStatusTask = useCallback((event: ChangeEvent<HTMLInputElement>) => {
			props.changeStatus(props.todoListID, props.elem.id, event.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New)
	 }, [props.changeStatus, props.todoListID, props.elem.id])

	 const onChangeTitleHundler = useCallback((newTitle: string) => {
			props.changeTaskTitle(props.todoListID, props.elem.id, newTitle)
	 }, [props.changeTaskTitle, props.todoListID, props.elem.id])

	 const isDoneOpacity = props.elem.status === TaskStatuses.Completed ? css.isDone : '';


	 return <div key={props.elem.id} className={isDoneOpacity}>
			<Checkbox onChange={onChangeStatusTask}
								checked={props.elem.status === TaskStatuses.Completed}/>
			<span className={css.titleTasks}>
						<EditableSpan title={props.elem.title} onChange={onChangeTitleHundler}/>
				 </span>
			<IconButton onClick={buttonRemoveTask} title='Remove task'><Delete/></IconButton>
	 </div>
})
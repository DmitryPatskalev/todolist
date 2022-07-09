import React from "react";
import {Task} from "../TodoList/Task";
import {action} from "@storybook/addon-actions";

export default {
	 title: 'TaskFormComponent',
	 component: Task
}
const removeTaskCallback = action('Task removed')
const changeTaskStatusCallback = action('Status changed')
const changeTaskTitleCallback = action('Title changed')


export const TaskBaseExample = (props: any) => {
	 return <>
			<Task
				removeTask={removeTaskCallback}
				changeStatus={changeTaskStatusCallback}
				changeTaskTitle={changeTaskTitleCallback}
				elem={{id: '1', title: 'JS', isDone: true}}
				todoListID={'todoListID1'}/>
			<Task
				removeTask={removeTaskCallback}
				changeStatus={changeTaskStatusCallback}
				changeTaskTitle={changeTaskTitleCallback}
				elem={{id: '1', title: 'React', isDone: false}}
				todoListID={'todoListID2'}/>
	 </>
}
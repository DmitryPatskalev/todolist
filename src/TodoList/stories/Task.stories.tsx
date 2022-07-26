import React from "react";
import {Task} from "../features/TodoListsList/TodoList/Task/Task";
import {action} from "@storybook/addon-actions";
import {ComponentMeta} from "@storybook/react";
import {TaskPriorities, TaskStatuses} from "../api/TodolistsAPI";
import {todoListId1} from "../reducers/todoList-reducer";

export default {
	 title: 'TodoList/TaskFormComponent',
	 component: Task,
	 args: {}
} as ComponentMeta<typeof Task>

// const Template: ComponentStory<typeof Task> = (args) => {


const changeStatus = action('ChangeTask')
const changeTaskTitle = action('task changed')
const removeTask = action('task removed')

export const TaskBaseExample = (props: any) => {
	 return <div>
			<Task
				elem={{
					 id: '1', title: 'JS', status: TaskStatuses.New, todoListId: todoListId1,
					 startDate: '',
					 deadline: '',
					 addedDate: '',
					 order: 0,
					 priority: TaskPriorities.Low,
					 description: ''
				}}
				changeStatus={changeStatus}
				changeTaskTitle={changeTaskTitle}
				todoListID={'todoListID1'}
				removeTask={removeTask}/>
	 </div>
}


//
// export const TaskStory = Template.bind({})
// TaskStory.args = {
// 	 removeTask: action('remove Task')
// }

//
// const baseArgs = {
// 	 removeTask: action('Task removed'),
// 	 changeStatus: action('Status changed'),
// 	 changeTaskTitle: action('Title changed')
// }
// export const TaskIsDoneStory = Template.bind({})
// TaskIsDoneStory.args = {
// 	 ...baseArgs,
// 	 elem: {id: '1', title: 'JS', isDone: true},
// 	 todoListID: 'todoListID1'
// }
// export const TaskIsNotDoneStory = Template.bind({})
// TaskIsNotDoneStory.args = {
// 	 ...baseArgs,
// 	 elem: {id: '1', title: 'REACT', isDone: false},
// 	 todoListID: 'todoListID2'
// }

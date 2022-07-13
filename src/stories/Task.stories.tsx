import React, {useState} from "react";
import {Task} from "../TodoList/Task";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	 title: 'TodoList/TaskFormComponent',
	 component: Task,
	 args: {}
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => {
	 const [task, setTask] = useState({id: '1', title: 'JS', isDone: true})

	 const changeStatus = () => {
			setTask({id: '1', title: 'JS', isDone: !task.isDone})
	 }
	 
	 const changeTaskTitle = (todoListID: string, title: string) => {
			setTask({id: todoListID, title: title, isDone: task.isDone})
	 }

	 return <Task {...args}
								changeStatus={changeStatus}
								changeTaskTitle={changeTaskTitle}
								elem={task}
								todoListID={'todoListID1'}/>
}
export const TaskStory = Template.bind({})
TaskStory.args = {
	 removeTask: action('remove Task')
}

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

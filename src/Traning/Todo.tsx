import React, {useCallback} from 'react';
import AddItemForm from "./AddItemForm";
import css from './style.module.css'
import EditableSpan from "./EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {FilterTaskType, TasksType} from "./AppTraningRedux";
import {Task} from "./Task";
import ButtonsFilterTasks from "./ButtonsFilterTasks";

type TodoType = {
	 todoListID: string
	 task: TasksType[]
	 title: string
	 onChangeFilter: (todoListID: string, filter: FilterTaskType) => void
	 addTask: (todoListID: string, title: string) => void
	 filter: FilterTaskType
	 removeTodoList: (todoListID: string) => void
	 changeTodoListTitle: (todoListID: string, newTitle: string) => void
	 changeTaskStatus: (todoListID: string, taskID: string, isDone: boolean) => void
	 changeTaskTitle: (todoListID: string, taskID: string, newTitle: string) => void
	 removeTask: (todoListID: string, id: string) => void
}

const Todo = React.memo((props: TodoType) => {
	 console.log('TodoList is called')

	 const removeTodoList = () => props.removeTodoList(props.todoListID)

	 const addTask = useCallback((newTitle: string) => {
			props.addTask(props.todoListID, newTitle)
	 }, [props.addTask, props.todoListID])

	 const onChangeTodoListTitle = useCallback((newTitle: string) => {
			props.changeTodoListTitle(props.todoListID, newTitle)
	 }, [props.changeTodoListTitle, props.todoListID])

	 let filterTask = props.task
	 if (props.filter === 'Active') {
			filterTask = props.task.filter(elem => !elem.isDone)
	 }
	 if (props.filter === 'Completed') {
			filterTask = props.task.filter(elem => elem.isDone)
	 }
	 return (
		 <div>
				<h3 className={css.todoListTitle}>
					 <EditableSpan title={props.title} onChange={onChangeTodoListTitle}/>
					 <IconButton onClick={removeTodoList}><Delete/></IconButton>
				</h3>
				<AddItemForm addTask={addTask}/>
				{filterTask.map(elem =>
					<Task changeTaskStatus={props.changeTaskStatus}
								changeTaskTitle={props.changeTaskTitle}
								removeTask={props.removeTask}
								elem={elem}
								todoListID={props.todoListID}
								key={elem.id}
					/>
				)}
				<ButtonsFilterTasks
					onChangeFilter={props.onChangeFilter}
					filter={props.filter}
					todoListID={props.todoListID}/>
		 </div>
	 );
});

export default Todo;


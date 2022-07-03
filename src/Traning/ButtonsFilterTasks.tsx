import React, {useCallback} from 'react';
import {FilterTaskType} from "./TodoListTraning";
import {Button} from "@material-ui/core";

type ButtonsFilterTasksType = {
	 todoListID: string
	 onChangeFilter: (todoListID: string, filter: FilterTaskType) => void
	 filter: FilterTaskType
}

const ButtonsFilterTasks = React.memo((props: ButtonsFilterTasksType) => {
	 
	 const filterAll = useCallback(() => {
			props.onChangeFilter(props.todoListID, 'All')
	 }, [props.onChangeFilter, props.todoListID])

	 const filterActive = useCallback(() => {
			props.onChangeFilter(props.todoListID, 'Active')
	 }, [props.onChangeFilter, props.todoListID])

	 const filterCompleted = useCallback(() => {
			props.onChangeFilter(props.todoListID, 'Completed')
	 }, [props.onChangeFilter, props.todoListID])


	 return (
		 <div>
				<Button variant={props.filter === 'All' ? 'contained' : 'text'}
								onClick={filterAll} color='primary'>All</Button>
				<Button variant={props.filter === 'Active' ? 'contained' : 'text'}
								onClick={filterActive} color='primary'>Active</Button>
				<Button variant={props.filter === 'Completed' ? 'contained' : 'text'}
								onClick={filterCompleted} color='primary'>Completed</Button>
		 </div>
	 );
});

export default ButtonsFilterTasks;

// const showAll = props.filter === 'All' ? css.colorFilter : ''
// const showActive = props.filter === 'Active' ? css.colorFilter : ''
// const showCompleted = props.filter === 'Completed' ? css.colorFilter : ''
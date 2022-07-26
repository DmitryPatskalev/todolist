import React from "react";
import {AppBar, Container, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {TaskType} from "../api/TodolistsAPI";
import {TodoListsList} from "../features/TodoListsList/TodoListsList";


export type TaskStateType = {
	 [key: string]: Array<TaskType>
}

const AppTodoList = () => {
	 return (
		 <Grid>
				<AppBar position='static'>
					 <Toolbar>
							<IconButton edge='start' color='inherit' aria-label='menu'>
								 <Menu/>
								 <Typography variant='h6'>
										TodoList
								 </Typography>
							</IconButton>
					 </Toolbar>
				</AppBar>
				<Container fixed>
					 <TodoListsList/>
				</Container>
		 </Grid>
	 );
}


export default AppTodoList;
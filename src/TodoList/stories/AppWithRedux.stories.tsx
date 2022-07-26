import React from "react";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import AppTodoList from "../components/AppTodoList";

export default {
	 title: 'TodoList/AppWithReduxComponent',
	 component: AppTodoList,
	 decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppTodoList>


const Template: ComponentStory<typeof AppTodoList> = () => <AppTodoList/>

export const AppWithReduxBaseExample = Template.bind({})
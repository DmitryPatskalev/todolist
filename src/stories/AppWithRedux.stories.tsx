import React from "react";
import AppWithRedux from "../TodoList/AppWithRedux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	 title: 'TodoList/AppWithReduxComponent',
	 component: AppWithRedux,
	 decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>


const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux/>

export const AppWithReduxBaseExample = Template.bind({})
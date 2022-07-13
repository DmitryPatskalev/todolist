import React from "react";

import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import AddItemForm from "../TodoList/AddItemForm";

export default {
	 title: 'TodoList/AddItemFormComponent',
	 component: AddItemForm,
	 argTypes: {
			addItem: {
				 description: 'Clicked inside form'
			},
	 },
} as ComponentMeta<typeof AddItemForm>
const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args}/>

export const AddItemFormStory = Template.bind({})

AddItemFormStory.args = {
	 addItem: action('Clicked inside form')
}


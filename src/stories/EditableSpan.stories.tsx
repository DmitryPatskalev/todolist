import React from "react";
import {EditableSpan} from "../TodoList/EditableSpan";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
	 title: 'TodoList/EditableSpanComponent',
	 component: EditableSpan,
	 argsType: {
			onClick: {
				 description: 'Button inside form clicked'
			}
	 }
} as ComponentMeta<typeof EditableSpan>

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args}/>
export const EditableSpanBaseExample = Template.bind({})

EditableSpanBaseExample.args = {
	 onChange: action('EditableSpan value changed')
}
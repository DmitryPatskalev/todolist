import React from "react";
import {EditableSpan} from "../TodoList/EditableSpan";
import {action} from "@storybook/addon-actions";

export default {
	 title: 'EditableSpanComponent',
	 component: EditableSpan
}
const onChangeCallback = action('Value changed')

export const EditableSpanBaseExample = () => {
	 return <EditableSpan title={'Start value'} onChange={onChangeCallback}/>
}
import React, {ChangeEvent, useState} from "react";

type InputType = {
	 message: string
	 setMessage: (value: string) => void
}

export const Input = (props: InputType) => {

	 let onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			props.setMessage(event.currentTarget.value)
	 }

	 return <span>
			<input value={props.message} onChange={onChangeHundler}/>

	 </span>
}
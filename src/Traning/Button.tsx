import React from "react";

export type ButtonType = {
	 name: string
	 callback: () => void
}

export const Button = (props: ButtonType) => {
	 let onClickHundler = () => {
			props.callback()
	 }
	 return <span>
				<button onClick={onClickHundler}>{props.name}</button>
	 </span>
}
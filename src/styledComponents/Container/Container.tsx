import {FC, ReactNode} from "react";

type ContainerPropsType = {
		/**
		 * primaryColor from global styles
		 */
		primaryColor?: string
		/**
		 * styles from parent
		 */
		className?: string
		/**
		 * react children
		 */
		children: ReactNode
}

export const Container: FC<ContainerPropsType> = ({children, primaryColor = "white", className}) => {
		const ContainerStyle = {
				padding: "20px 20px",
				border: `4px solid ${primaryColor}`,
				borderRadius: "5px",
		}

		return (
				<div style={ContainerStyle} className={className}>
						{children}
				</div>
		)
}
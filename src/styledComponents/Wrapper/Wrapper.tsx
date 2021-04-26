import {FC, ReactNode} from "react";

type WrapperPropsType = {
		/**
		 * react children
		 */
		children: ReactNode
}

export const Wrapper: FC<WrapperPropsType> = ({children}) => {
		const WrapperStyle = {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
		}

		return (
				<div style={WrapperStyle}>
						{children}
				</div>
		)
}
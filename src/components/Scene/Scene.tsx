import {FC} from "react";

export type ScenePropsType = {
		/**
		 * primaryColor from global styles
		 */
		primaryColor?: string
		/**
		 * secondaryColor from global styles
		 */
		secondaryColor?: string
		/**
		 * warningColor from global styles
		 */
		warningColor?: string
		/**
		 * Scene label
		 */
		label: number
		/**
		 * Case when warning value
		 */
		warning: boolean
}

export const Scene: FC<ScenePropsType> = ({
																							label,
																							warning,
																							warningColor = "red",
																							primaryColor = "white",
																							secondaryColor = "black"
																					}) => {
		const sceneStyle = {
				minWidth: "220px",
				minHeight: "140px",
				backgroundColor: primaryColor,
				color: warning ? warningColor : secondaryColor,
				margin: "0 auto",
				fontSize: "80px",
				borderRadius: "5px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
		}

		return (
				<div style={sceneStyle}>
						<div>{label}</div>
				</div>
		)
}
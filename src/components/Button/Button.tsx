import {FC} from "react";
import "./button.css"

export type ButtonPropsType = {
		/**
		 * Button label
		 */
		label: string;
		/**
		 * Click handler
		 */
		onClick?: () => void;
		/**
		 * Case when button disabled
		 */
		disabled?: boolean
		/**
		 * Width button from props
		 */
		width?: string
}

export const Button: FC<ButtonPropsType> = ({
																								label,
																								disabled,
																								width,
																								...props
																						}) => {

		const ButtonStyle = {
				opacity: disabled ? "0.5" : "1",
				width: width ? width : "100px",
		}

		return (
				<button
						style={ButtonStyle}
						className="button"
						type="button"
						disabled={disabled}
						{...props}
				>
						{label}
				</button>
		);
};
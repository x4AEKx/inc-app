import {useState} from "react";

import {Button} from "./components/Button/Button";
import {Scene} from "./components/Scene/Scene";
import {Wrapper} from "./styledComponents/Wrapper/Wrapper";
import {Container} from "./styledComponents/Container/Container";
import "./App.css";

const globalStyles = {
		primaryColor: "aqua",
		secondaryColor: "darkslategray",
		warningColor: "red"
}

function App() {
		const [value, setValue] = useState<number>(0)

		const inc = () => {
				setValue(value + 1)
		}

		const reset = () => {
				setValue(0)
		}

		return (
				<Wrapper>
						<Container primaryColor={globalStyles.primaryColor}>
								<Scene warningColor={globalStyles.warningColor} primaryColor={globalStyles.primaryColor}
											 secondaryColor={globalStyles.secondaryColor} label={value} warning={value === 5}/>
								<Container primaryColor={globalStyles.primaryColor} className="mt-5 space-between">
										<Button width="45%" label="inc" onClick={inc} disabled={value >= 5}/>
										<Button width="45%" label="reset" onClick={reset} disabled={value <= 0}/>
								</Container>
						</Container>
				</Wrapper>

		);
}

export default App;

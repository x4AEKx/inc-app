import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

describe('App component tests: ', () => {
		beforeEach(() => {
				render(<App/>);
		})

		test("renders buttons and Scene, resetButton should be disabled", () => {
				const incButton = screen.getByText("inc")
				const resetButton = screen.getByText("reset")
				const initScene = screen.getByText("0")

				expect(resetButton).toBeInTheDocument()
				expect(resetButton).toHaveAttribute('disabled')
				expect(incButton).toBeInTheDocument()
				expect(initScene).toBeInTheDocument()
		});

		test("incButton clicked should change scene", async () => {
				const incButton = screen.getByText("inc")
				const initScene = screen.getByText("0")
				expect(initScene).toBeInTheDocument()

				fireEvent.click(incButton)
				const sceneAfterClick = await screen.findByText("1")
				expect(sceneAfterClick).toBeInTheDocument()
		});

		test("after 6 clicks Scene should be with \"5\" value and incButton should be disabled",  () => {
				const incButton = screen.getByText("inc")
				const resetButton = screen.getByText("reset")
				const initScene = screen.getByText("0")
				expect(initScene).toBeInTheDocument()

				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)

				const sceneAfter6Click = screen.queryByText("5")
				expect(sceneAfter6Click).toBeInTheDocument()
				expect(incButton).toHaveAttribute('disabled')
				expect(resetButton).not.toHaveAttribute('disabled')
		});

		test("after 6 clicks Scene should`t be with \"6\" value and incButton should be disabled",  () => {
				const incButton = screen.getByText("inc")
				const initScene = screen.getByText("0")
				expect(initScene).toBeInTheDocument()

				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)
				fireEvent.click(incButton)

				const sceneAfter6Click = screen.queryByText("6")
				expect(sceneAfter6Click).not.toBeInTheDocument()
				expect(incButton).toHaveAttribute('disabled')
		});

		test("resetButton should reset Scene value to '0' then resetButton should be disabled", async () => {
				const incButton = screen.getByText("inc")
				const resetButton = screen.getByText("reset")
				const initScene = screen.getByText("0")
				expect(initScene).toBeInTheDocument()
				expect(resetButton).toHaveAttribute('disabled')
				expect(incButton).not.toHaveAttribute('disabled')

				fireEvent.click(incButton)
				const sceneAfterIncButtonClick = await screen.findByText("1")
				expect(sceneAfterIncButtonClick).toBeInTheDocument()
				expect(incButton).not.toHaveAttribute('disabled')
				expect(resetButton).not.toHaveAttribute('disabled')

				fireEvent.click(resetButton)
				const SceneAfterResetButtonClicked = await screen.findByText("0")
				expect(SceneAfterResetButtonClicked).toBeInTheDocument()
				expect(initScene).toEqual(SceneAfterResetButtonClicked)
				expect(incButton).not.toHaveAttribute('disabled')
				expect(resetButton).toHaveAttribute('disabled')
		});
})



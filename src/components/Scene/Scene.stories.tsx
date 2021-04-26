import React from "react";
import {Story, Meta} from "@storybook/react";

import {Scene, ScenePropsType} from "./Scene";

export default {
		title: "Components/Scene",
		component: Scene,
} as Meta;

const Template: Story<ScenePropsType> = (args) => <Scene {...args} />;

export const DefaultScene = Template.bind({});
DefaultScene.args = {
		label: 1,
};

export const SceneWithColors = Template.bind({});
SceneWithColors.args = {
		label: 4,
		primaryColor: "aqua",
		secondaryColor: "darkslategray"
};

export const SceneWarning = Template.bind({});
SceneWarning.args = {
		label: 4,
		warning: true,
		primaryColor: "aqua",
		secondaryColor: "darkslategray"
};
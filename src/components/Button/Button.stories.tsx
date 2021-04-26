import React, {FC, useState} from "react";
import { Story, Meta } from '@storybook/react';

import { Button, ButtonPropsType } from './Button';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: 'inc',
  onClick: action('clicked!')
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: 'inc',
  disabled: true,
  onClick: action('button disabled can`t clicked!')
};

export const ButtonWithWidthProps = Template.bind({});
ButtonWithWidthProps.args = {
  label: 'inc',
  width: '45%',
  onClick: action('clicked!')
};
import React from "react";

import Switch from "./";

export default {
  title: "Components/Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const DarkMode = Template.bind({});
DarkMode.args = { mode: "darkMode" };

export const LightMode = Template.bind({});
LightMode.args = { mode: "lightMode" };

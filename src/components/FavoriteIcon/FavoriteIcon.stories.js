import React from "react";

import FavoriteIcon from "./";

export default {
  title: "FavoriteIcon",
  component: FavoriteIcon,
};

const Template = (args) => <FavoriteIcon {...args} />;

export const Filled = Template.bind({});
Filled.args = { isFavorite: true };

export const Empty = Template.bind({});
Empty.args = { isFavorite: false };

import React from "react";

import PokemonTypeTag from ".";

export default {
  title: "Components/PokemonTypeTag",
  component: PokemonTypeTag,
};

const Template = (args) => <PokemonTypeTag {...args} />;

export const Rock = Template.bind({});
Rock.args = { pokemonType: "rock" };

export const Ghost = Template.bind({});
Ghost.args = { pokemonType: "ghost" };

export const Steel = Template.bind({});
Steel.args = { pokemonType: "steel" };

export const Water = Template.bind({});
Water.args = { pokemonType: "water" };

export const Grass = Template.bind({});
Grass.args = { pokemonType: "grass" };

export const Psychic = Template.bind({});
Psychic.args = { pokemonType: "psychic" };

export const Ice = Template.bind({});
Ice.args = { pokemonType: "ice" };

export const Dark = Template.bind({});
Dark.args = { pokemonType: "Dark" };

export const Fairy = Template.bind({});
Fairy.args = { pokemonType: "fairy" };

export const Normal = Template.bind({});
Normal.args = { pokemonType: "normal" };

export const Fighting = Template.bind({});
Fighting.args = { pokemonType: "fighting" };

export const Flying = Template.bind({});
Flying.args = { pokemonType: "flying" };

export const Poison = Template.bind({});
Poison.args = { pokemonType: "poison" };

export const Ground = Template.bind({});
Ground.args = { pokemonType: "ground" };

export const Bug = Template.bind({});
Bug.args = { pokemonType: "bug" };

export const Fire = Template.bind({});
Fire.args = { pokemonType: "fire" };

export const Electric = Template.bind({});
Electric.args = { pokemonType: "electric" };

export const Dragon = Template.bind({});
Dragon.args = { pokemonType: "dragon" };

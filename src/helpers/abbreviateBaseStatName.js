export const abbreviateBaseStatName = (stat) =>
  ({
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  }[stat]);

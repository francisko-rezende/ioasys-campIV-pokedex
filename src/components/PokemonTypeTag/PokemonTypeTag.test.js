import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../styles/theme";
import PokemonTypeTag from "./";

test("tag renders the received pokemon type as text properly", () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonTypeTag pokemonType="fire" />
    </ThemeProvider>
  );

  const tag = screen.getByText(/fire/i);
  expect(tag).toBeInTheDocument();
});

test("tag's background color renders as expected", () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonTypeTag pokemonType="dragon" />
    </ThemeProvider>
  );

  const tag = screen.getByText(/dragon/i);
  expect(tag).toHaveStyle({ backgroundColor: "#7037FF" });
});

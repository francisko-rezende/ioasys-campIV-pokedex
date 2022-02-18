import React from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../store/slices/modeSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      Ioasys pokédex{" "}
      <button onClick={() => dispatch(TOGGLE_THEME())}>Mudar tema</button>
    </header>
  );
};

export default Header;

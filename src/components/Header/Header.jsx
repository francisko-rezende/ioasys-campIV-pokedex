import React from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../store/slices/modeSlice";
import * as S from "./Header.style";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <S.Header>
      <S.Logo />
      ioasys pokédex{" "}
      <button onClick={() => dispatch(TOGGLE_THEME())}>Mudar tema</button>
    </S.Header>
  );
};

export default Header;

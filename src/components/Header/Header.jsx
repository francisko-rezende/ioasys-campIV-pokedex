import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useSaveInLocalStorage from "../../hooks/useSaveInLocalStorage";
import { TOGGLE_THEME } from "../../store/slices/modeSlice";
import Switch from "../Switch";
import * as S from "./Header.style";

const Header = () => {
  const dispatch = useDispatch();
  const { currentMode } = useSelector(({ mode }) => mode);

  const toggleMode = () => dispatch(TOGGLE_THEME());

  useSaveInLocalStorage("mode", currentMode);

  return (
    <S.Header>
      <S.Title>
        <S.Logo />
        ioasys pokédex{" "}
      </S.Title>
      <Switch onClick={toggleMode} mode={currentMode} />
    </S.Header>
  );
};

export default Header;

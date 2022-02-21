import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../store/slices/modeSlice";
import Switch from "../Switch";
import * as S from "./Header.style";

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector(({ mode }) => mode);

  const toggleMode = () => dispatch(TOGGLE_THEME());

  React.useEffect(() => {
    window.localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <S.Header>
      <div>
        <S.Logo />
        ioasys pokédex{" "}
      </div>
      <Switch onClick={toggleMode} mode={mode} />
    </S.Header>
  );
};

export default Header;

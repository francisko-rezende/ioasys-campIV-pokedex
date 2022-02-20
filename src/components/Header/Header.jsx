import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../store/slices/modeSlice";
import * as S from "./Header.style";

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector(({ mode }) => mode);

  React.useEffect(() => {
    window.localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  return (
    <S.Header>
      <S.Logo />
      ioasys pokédex{" "}
      <button onClick={() => dispatch(TOGGLE_THEME())}>Mudar tema</button>
    </S.Header>
  );
};

export default Header;

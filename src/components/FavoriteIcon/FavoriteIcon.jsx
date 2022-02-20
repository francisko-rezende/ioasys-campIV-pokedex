import * as S from "./FavoriteIcon.style";

const FavoriteIcon = ({ onClick, isFavorite }) => {
  return (
    <S.FavoriteIcon
      onClick={onClick}
      isFavorite={isFavorite}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.414 4.964h0a5.002 5.002 0 0 1 7.072 0h0a4.999 4.999 0 0 1 0 7.072h0l-1.06 1.06L12 20.523l-7.426-7.427-1.06-1.06a5.001 5.001 0 1 1 7.072-7.072l1.06 1.06a.5.5 0 0 0 .708 0l1.06-1.06Z"
        stroke="#EC0344"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </S.FavoriteIcon>
  );
};

export default FavoriteIcon;

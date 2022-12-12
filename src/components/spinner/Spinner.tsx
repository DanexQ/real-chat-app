import react from "react";
import * as S from "./StyledSpinner";

const Spinner = () => {
  return (
    <S.SpinnerContainer>
      <S.Spinner delay={0}></S.Spinner>
      <S.Spinner delay={1}></S.Spinner>
      <S.Spinner delay={2}></S.Spinner>
    </S.SpinnerContainer>
  );
};

export default react.memo(Spinner);

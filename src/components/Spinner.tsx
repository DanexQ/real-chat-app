import react from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <StyledSpinner delay={0}></StyledSpinner>
      <StyledSpinner delay={1}></StyledSpinner>
      <StyledSpinner delay={2}></StyledSpinner>
    </SpinnerContainer>
  );
};

export default react.memo(Spinner);

const SpinnerContainer = styled.div`
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 3rem;
`;

const spinnerAnimation = keyframes`
0%{
    height:1rem;
    background-color: rgba(255,255,255,.5);
}
50%{
    height: 3rem;
    background-color: rgba(255,255,255,1);
}
100%{
    height: 1rem;
    background-color: rgba(255,255,255,.5);
}
`;

const StyledSpinner = styled.div<{ delay: number }>`
  display: none;
  align-self: center;
  width: 1rem;
  height: 3rem;
  background-color: white;
  animation-name: ${spinnerAnimation};
  animation-duration: 1s;
  animation-delay: ${({ delay }) => delay * 0.2}s;
  animation-iteration-count: infinite;
`;

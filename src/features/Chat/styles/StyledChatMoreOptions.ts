import styled, { css, keyframes } from "styled-components";

const popUp = keyframes`
    0%{
        max-height:0;
    }

    100%{
        max-height:20rem;
    }
`;

const popOut = keyframes`
    0%{
      max-height:20rem;
    }

    100%{
      max-height:0;
    }
`;

const animationRuleOut = css`
  ${popOut} .2s linear;
`;

const animationRuleIn = css`
  ${popUp} .2s linear;
`;

export const MoreOptionsContainer = styled.div<{ hide: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 100%;
  width: max-content;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 1px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  overflow: hidden;
  animation: ${({ hide }) => (hide ? animationRuleOut : animationRuleIn)};\
  animation-fill-mode: both;

`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`;

export const Option = styled.li`
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;

  svg {
    font-size: 2rem !important;
  }
`;

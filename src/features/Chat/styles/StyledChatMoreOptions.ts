import styled, { css, keyframes } from "styled-components";

const popUp = keyframes`
    0%{
        height:0px;
    }

    100%{
        height:100px;
    }
`;

const popOut = keyframes`
    0%{
        height:100px;
    }

    100%{
        height:0px;
    }
`;

const animationRuleOut = css`
  ${popOut} 1s linear;
`;

const animationRuleIn = css`
  ${popUp} 1s linear;
`;

export const MoreOptionsContainer = styled.div<{ hide: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 100%;
  background-color: red;
  width: 100px;
  overflow: hidden;
  animation-fill-mode: both;
  animation: ${({ hide }) => (hide ? animationRuleOut : animationRuleIn)};
`;

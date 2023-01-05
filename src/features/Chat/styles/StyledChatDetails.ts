import styled, { keyframes } from "styled-components";

export const ChatDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4rem;
  gap: 1rem;
  height: 9rem;
  background-color: #f5f3f4;

  // #f5f3f4;

  @media only screen and (max-width: 900px) {
    padding: 0 2rem;
    height: 7rem;
  }
`;

export const ChatAvatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
`;

export const DisplayName = styled.span`
  color: #34aa44;
  font-size: 2.3rem;
  font-weight: 700;
  margin-right: auto;
`;

export const ChatOptions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  backface-visibility: hidden;
  position: relative;

  svg {
    font-size: 3.5rem !important;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: color 0.2s;
    backface-visibility: hidden;

    &:active {
      transform: scale(0.95);
    }
  }
`;

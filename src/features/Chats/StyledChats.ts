import styled from "styled-components";

export const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryColor};
  height: 100vh;
  gap: 3rem;
  padding: 3rem 2rem;
  min-width: 30rem;
  flex: 0.9;
`;

export const ChatsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.7rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const ChatsMenu = styled.div`
  cursor: pointer;
  padding: 1rem;
  transform: translateX(1rem);

  &:active {
    div {
      scale: 0.92;
    }
  }
`;

export const DotsMenuIcon = styled.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 20rem;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
  }

  &::before {
    top: -7px;
  }

  &::after {
    top: 7px;
  }
`;

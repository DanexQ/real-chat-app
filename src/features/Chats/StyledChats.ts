import styled from "styled-components";

export const ChatsContainer = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryColor};
  gap: 3rem;
  padding: 3rem;
  overflow: auto;

  @media only screen and (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media only screen and (max-width: 500px) {
    ${({ mobile }) =>
      mobile
        ? `display:none;`
        : `
        padding: 2rem;`}
  }
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

export const ChatsOverflow = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`;

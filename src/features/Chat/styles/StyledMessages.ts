import styled from "styled-components";

export const Messages = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    padding: 1rem;
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.secondaryColor};
  height: calc(100% - 18rem);
  padding: 3rem;

  @media only screen and (max-width: 900px) {
    height: calc(100% - 16rem);
    padding: 2rem 1rem;
  }
`;

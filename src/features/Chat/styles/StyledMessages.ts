import styled from "styled-components";

export const Messages = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 3rem 3rem 3rem;

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
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;

  @media only screen and (max-width: 900px) {
    height: calc(100% - 16rem);
  }
`;

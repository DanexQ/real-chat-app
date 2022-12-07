import styled from "styled-components";

export const Messages = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 3rem 3rem 3rem;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  background-color: #f5f3f4;
  height: calc(100% - 18rem);
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

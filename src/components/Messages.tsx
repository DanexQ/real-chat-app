import React from "react";
import styled from "styled-components";
import Message from "./Message";

const Messages = () => {
  return (
    <Siema>
      <MessagesContainer>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </MessagesContainer>
    </Siema>
  );
};

export default Messages;

const MessagesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

const Siema = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  height: calc(100% - 160px);
`;

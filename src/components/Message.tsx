import React from "react";
import styled from "styled-components";
import { Avatar } from "./Navbar";

const Message = () => {
  return (
    <MessageContainer>
      <Avatar
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="friend"
      />
      <MessageText>
        siema gnoju jebanygrsda gioaoidsadasdsadasg asdou pizdo kleszczu siema
        gnoju jebanygrsda gioaoidsadasdsadasg asdou pizdo kleszczusiema gnoju
        jebanygrsda gioaoidsadasdsadasg asdou pizdo kleszczu
      </MessageText>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
`;

const MessageText = styled.span`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
  border-radius: 1rem 1rem 0 1rem;
  max-width: 80%;
`;

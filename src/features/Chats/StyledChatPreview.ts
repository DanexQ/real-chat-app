import styled from "styled-components";
import { Avatar } from "../../styles/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const DeleteIcon = styled(DeleteOutlineIcon)`
  font-size: 2.2rem !important;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const FriendsName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryColor};
  letter-spacing: 0.5px;
`;

export const Chat = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: 10;
  display: flex;
  padding: 2rem 2rem 2rem 1rem;
  background-color: #fff;
  color: #bbb;
  gap: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 0.5rem #d9d9d9;
  backface-visibility: hidden;
  transition: all 0.2s;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0rem 0rem #d9d9d9;
  }

  &:has(${DeleteIcon}:active) {
    transform: translateY(0);
    box-shadow: 0 0.2rem 0.5rem #d9d9d9;
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
     background-color: ${theme.primaryColor};
     color: #fff; 
     border: 1px solid ${theme.primaryColor};
     transform: translateY(0);
     box-shadow: 0 0 0 #d9d9d9;

     &:has(${DeleteIcon}:active) {
      box-shadow: 0 0 0 #d9d9d9;
    }

    ${FriendsName}, ${DeleteIcon}{
      color: #fff;
    }
    ${Dot}{
      background-color: #fff;
    }
    ${LastMessage}{
      border-top: 1px solid rgba(255,255,255,.5);
    }
    
    `}

  &:hover {
    filter: brightness(95%);
  }

  @media only screen and (min-width: 500px) and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 6rem;
    height: 6rem;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const LastMessageDate = styled.span`
  font-size: 1.1rem;
  margin-right: auto;
  font-weight: 400;
`;

export const ChatAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 500px) and (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

export const ChatAvatarContainer = styled.div`
  height: 50%;
  align-self: flex-start;
  display: grid;
  align-items: center;
`;

export const ChatsDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #bbb;
  border-radius: 2rem;
`;

export const PreviewContainer = styled.div`
  flex: 1;
  gap: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 500px) and (max-width: 900px) {
    display: none;
  }
`;

export const LastMessage = styled.span`
  font-size: 1.6rem;
  width: 100%;
  padding-top: 1rem;
  border-top: 2px solid #eee;
  word-wrap: break-word;
  word-break: break-word;
`;

export const DotsMenuIcon = styled.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #bbb;
  border-radius: 20rem;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
  }

  &::before {
    left: -7px;
  }

  &::after {
    right: -7px;
  }
`;

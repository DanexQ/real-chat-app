import styled from "styled-components";

export const NotChoosedChat = styled.div`
  width: 100%;
  height: 100%;
  color: #34aa44;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f3f4;
`;

export const ChatContainer = styled.div`
  flex: 3 1;
  max-height: 100vh;
  border-left: 1px solid #d3d3d3;
`;

export const ChatDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4rem;
  gap: 1rem;
  height: 9rem;
  background-color: #f5f3f4;

  // #f5f3f4;
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

  svg {
    font-size: 3.5rem !important;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: color 0.2s;
    backface-visibility: hidden;

    &:hover {
      color: #34aa44;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

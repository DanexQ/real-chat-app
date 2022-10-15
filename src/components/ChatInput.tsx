import React from "react";
import styled from "styled-components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const ChatInput = () => {
  return (
    <ChatFormContainer>
      <Input type="text" placeholder="Type something..." />

      <label htmlFor="sendFile">
        <FileInput name="sendFile" type="file" />
        <AttachFileIcon />
      </label>

      <label htmlFor="sendImg">
        <FileInput name="sendImg" type="file" />
        <AddPhotoAlternateIcon />
      </label>
      <button>Send</button>
    </ChatFormContainer>
  );
};

export default ChatInput;

const ChatFormContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;

  label {
    color: #c5c5c5;

    svg {
      font-size: 3rem !important;
      cursor: pointer;
      color: inherit;
      transition: all 0.2s;

      &:hover {
        filter: brightness(90%);
      }

      &:active {
        scale: 0.95;
      }
    }
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: none;
    color: white;
    font-weight: 500;
    background-color: #a5a5a5;
    box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      filter: brightness(90%);
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0);
    }
  }
`;

const Input = styled.input`
  font-size: 2rem;
  height: 80px;
  flex: 1;
  border: none;

  &:focus {
    outline: none;
    border: none;

    ~ label {
      color: #189ad3;
    }

    ~ button {
      background-color: #189ad3;
    }
  }
`;

const FileInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

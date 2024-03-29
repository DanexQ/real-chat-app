import styled from "styled-components";

export const ChatFormContainer = styled.form`
  width: 100%;
  height: 9rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: white;
  border-top: 1px solid #d3d3d3;

  label {
    color: #adb5bd;

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

  @media only screen and (max-width: 500px) {
    gap: 1rem;
    padding: 1rem;
  }
`;

export const Input = styled.input`
  font-size: 2rem;
  flex: 1;
  height: 100%;
  word-wrap: break-word;
  word-break: break-all;
  border: none;
  color: black;
  background-color: inherit;
  resize: none;
  vertical-align: middle;
  z-index: 4;

  &:focus {
    outline: none;
    border: none;

    ~ label {
      color: ${({ theme }) => theme.primaryColor};
    }
  }

  @media only screen and (max-width: 500px) {
    font-size: 1.75rem;
  }
`;

export const FileInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

export const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  border-radius: 1rem;
  box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.primaryColor};

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0);
  }

  &:disabled {
    background-color: #adb5bd;

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.3);
    }
  }
`;

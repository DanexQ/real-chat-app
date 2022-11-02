import react from "react";
import styled from "styled-components";

export const FormContainer = styled.form`
  width: 50rem;
  padding: 6rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: 2rem;
`;

export const FormLabelMain = styled.h2`
  font-size: 5rem;
  color: #34aa44;
  text-transform: uppercase;
`;

export const FormLabelSub = styled.span`
  text-transform: uppercase;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Error = react.memo(styled.span`
  color: red;
  font-size: 1.5rem;
`);

export const SubmitButton = react.memo(styled.button<{ isLoading: boolean }>`
  position: relative;
  width: 100%;
  padding: 1rem 0;
  letter-spacing: 1px;
  font-size: 2.1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #34aa44;
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: translateY(1px);
  }

  ${({ isLoading }) =>
    isLoading &&
    `
    cursor: default;
    color: #d0d0d0;
    background-color: #d0d0d0;

    &:active {
      transform: translateY(1px);
    }

    > div > div{
      display:block;
    }
`}
`);

export const Reminder = styled.span`
  font-size: 1.5rem;

  > a {
    color: #34aa44;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.2s;

    &:hover {
      color: #107dac;
    }
  }
`;

import { inputsProps } from "../interfaces";
import styled, { keyframes } from "styled-components";
import react, { useState } from "react";

interface FormInputProps extends inputsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: FormInputProps) => {
  const { errorMessage, inputDetail, ...inputProps } = props;
  const [isValid, setChecked] = useState(false);

  const validationCheck = () => {
    setChecked(true);
  };

  return (
    <InputContainer>
      <StyledInput
        {...inputProps}
        required
        isValid={isValid}
        onBlur={validationCheck}
      />
      {inputDetail && (
        <HintIcon>
          <HintMessage>{inputDetail}</HintMessage>
        </HintIcon>
      )}
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
};

const MemoizedFormInput = react.memo(FormInput);

export default MemoizedFormInput;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

const StyledInput = styled.input<{ isValid: boolean }>`
  width: 100%;
  padding: 1rem 4rem 1rem 2rem;
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border-bottom: 1px solid #ffc611;
  }

  &:invalid {
    ${({ isValid }) =>
      isValid &&
      `border-bottom: 1px solid #ff033e;

    ~ span {
      display: block;
    }`}
  }

  &:valid {
    border-bottom: 1px solid #68de59;
  }
`;

const HintMessage = styled.span`
  position: absolute;
  bottom: 3.5rem;
  transform: translate(-40%, 0);
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  width: 20rem;
  background-color: #88cafc;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
`;

const showHint = keyframes`
  0%{
    visibility: visible;
  }
  100%{
    visibility: visible;
    opacity: 1;
  }
  
`;

const HintIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 100rem;
  border: 3px solid #88cafc;
  background-color: #fff;

  &::after {
    content: "i";
    font-size: 1.6rem;
    font-weight: 700;
    position: absolute;
    color: #88cafc;
    top: 0;
    left: 40%;
  }

  &:hover {
    span {
      animation-name: ${showHint};
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 1.5rem;
  display: none;
`;

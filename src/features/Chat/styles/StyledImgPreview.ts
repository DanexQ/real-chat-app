import HighlightOff from "@mui/icons-material/HighlightOff";
import styled, { keyframes } from "styled-components";

const EnterComponent = keyframes`
  0%{
    bottom:0%;
  }
  100%{
    bottom: 100%;
  }
`;

export const PreviewContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 2rem 3rem;
  margin: 0 0 1rem 2rem;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  animation-name: ${EnterComponent};
  animation-duration: 1s;
  animation-fillmode: forwards;
  z-index: 1;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: white;
  display: flex;
  border: none;
`;

export const RemoveIcon = styled(HighlightOff)`
  font-size: 2rem !important;
`;

import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  max-width: 160rem;
  max-height: 100rem;
`;

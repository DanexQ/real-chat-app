import * as S from "./StyledModalOverlay";

interface ModalOverlayProps {
  handleClick: () => void;
}

const ModalOverlay = ({ handleClick }: ModalOverlayProps) => {
  return <S.ModalOverlay onClick={handleClick} />;
};

export default ModalOverlay;

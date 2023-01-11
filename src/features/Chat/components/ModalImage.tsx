import * as S from "../styles/StyledModalImage";

interface ModalImageProps {
  src: string;
  id: string;
  onClick: () => void;
}

const ModalImage = ({ src, id, onClick }: ModalImageProps) => {
  return (
    <S.ModalContainer onClick={onClick}>
      <S.ModalImage
        src={src}
        alt={`modal${id}`}
        onClick={(e) => e.stopPropagation()}
      />
    </S.ModalContainer>
  );
};

export default ModalImage;

import * as S from "../styles/StyledImgPreview";

interface ImgPreviewProps {
  image: File;
  handleRemove: () => void;
}

const ImgPreview = ({ image, handleRemove }: ImgPreviewProps) => {
  return (
    <S.PreviewContainer>
      {image.name}
      <S.RemoveButton onClick={handleRemove}>
        <S.RemoveIcon />
      </S.RemoveButton>
    </S.PreviewContainer>
  );
};

export default ImgPreview;

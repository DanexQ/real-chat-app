import { useState } from "react";
import * as S from "../styles/StyledImage";
import ModalImage from "./ModalImage";

const Image = ({ src, id }: { src: string; id: string }) => {
  const [extendImage, setExtendImage] = useState(false);

  const handleClickExtend = () => {
    setExtendImage((prevValue) => !prevValue);
  };
  return (
    <>
      <S.Image src={src} alt={id} onClick={handleClickExtend} />
      {extendImage && (
        <ModalImage src={src} id={id} onClick={handleClickExtend} />
      )}
    </>
  );
};

export default Image;

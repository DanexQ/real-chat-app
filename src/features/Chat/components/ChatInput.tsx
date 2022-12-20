import React, { useContext, useRef, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AuthContext from "@context/AuthContext";
import { ChatContext } from "@context/ChatContext";
import { sendMessage } from "../sendMessage";
import * as S from "../styles/StyledChatInput";
import ImgPreview from "./ImgPreview";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const { currentUser } = useContext(AuthContext);
  const { chat } = useContext(ChatContext);
  const isDisabled = !(!!image || !!text.trim());

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setText("");
    setImage(undefined);
    sendMessage({ chat, currentUser, image, text });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    setImage(e.target.files![0]);
  };

  const handleRemoveUploadedImg = () => {
    setImage(undefined);
  };

  return (
    <S.ChatFormContainer onSubmit={handleSend}>
      {!!image && (
        <ImgPreview image={image} handleRemove={handleRemoveUploadedImg} />
      )}
      <S.Input
        placeholder="Type a message here..."
        onChange={handleChange}
        value={text}
      />
      <label htmlFor="sendImg">
        <S.FileInput
          name="sendImg"
          type="file"
          id="sendImg"
          multiple
          onChange={handleSetImage}
        />
        <AddPhotoAlternateIcon />
      </label>
      <S.Button onClick={handleSend} disabled={isDisabled}>
        Send
      </S.Button>
    </S.ChatFormContainer>
  );
};

export default ChatInput;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AuthContext from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [file, setFile] = useState<File | undefined>(undefined);
  const isDisabled =
    ![file, image, text].some((val) => !!val) ||
    text.split("").every((letter) => letter === " ");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        () => {},
        (error: Error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data?.chatID), {
              messages: arrayUnion({
                id: uuid(),
                text: text.trim(),
                senderId: currentUser?.uid,
                date: Timestamp.now(),
                image: downloadURL,
              }),
            });
          });
        }
      );
    } else if (text) {
      await updateDoc(doc(db, "chats", data?.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text: text.trim(),
          senderId: currentUser?.uid,
          senderName: currentUser?.displayName,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser!.uid), {
      [data?.chatID + ".lastMessage"]: { text },
      [data?.chatID + ".date"]: Timestamp.now(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data?.chatID + ".lastMessage"]: { text },
      [data?.chatID + ".date"]: Timestamp.now(),
    });
    setText("");
    setFile(undefined);
    setImage(undefined);
  };

  return (
    <ChatFormContainer onSubmit={(e) => handleSend(e)}>
      <Input
        placeholder="Type a message here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        wrap="soft"
      />

      <label htmlFor="sendFile">
        <FileInput
          name="sendFile"
          type="file"
          id="sendFile"
          onChange={(e) => {
            console.log(e.target.files);
            setFile(e.target.files![0]);
          }}
        />
        <AttachFileIcon />
      </label>

      <label htmlFor="sendImg">
        <FileInput
          name="sendImg"
          type="file"
          id="sendImg"
          onChange={(e) => {
            setImage(e.target.files![0]);
          }}
        />
        <AddPhotoAlternateIcon />
      </label>
      <button onClick={handleSend} disabled={isDisabled}>
        Send
      </button>
    </ChatFormContainer>
  );
};

export default ChatInput;

const ChatFormContainer = styled.form`
  width: 100%;
  height: 12rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 2rem;
  background-color: #f5f3f4;
  color: white;

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

  button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: none;
    color: #212529;
    font-weight: 500;
    box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s;
    background-color: #189ad3;

    &:hover {
      filter: brightness(90%);
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0);
    }

    &:disabled {
      background-color: #adb5bd;
    }
  }
`;

const Input = styled.textarea`
  font-size: 1.6rem;
  flex: 1;
  height: 90%;
  word-wrap: break-word;
  word-break: break-all;
  border: none;
  background-color: inherit;
  resize: none;

  &:focus {
    outline: none;
    border: none;

    ~ label {
      color: #189ad3;
    }
  }
`;

const FileInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

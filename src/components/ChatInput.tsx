import React, { useContext, useState } from "react";
import styled from "styled-components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AuthContext from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [file, setFile] = useState<File | undefined>(undefined);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);
      console.log("check");

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
                text,
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
          text,
          senderId: currentUser?.uid,
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
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
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
            console.log(e.target.files);
            setImage(e.target.files![0]);
          }}
        />
        <AddPhotoAlternateIcon />
      </label>
      <button onClick={handleSend}>Send</button>
    </ChatFormContainer>
  );
};

export default ChatInput;

const ChatFormContainer = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;

  label {
    color: #c5c5c5;

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
    color: white;
    font-weight: 500;
    background-color: #a5a5a5;
    box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      filter: brightness(90%);
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0);
    }
  }
`;

const Input = styled.input`
  font-size: 2rem;
  height: 80px;
  flex: 1;
  border: none;

  &:focus {
    outline: none;
    border: none;

    ~ label {
      color: #189ad3;
    }

    ~ button {
      background-color: #189ad3;
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

import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, useState } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase";
import { FriendsName, UserInfoType } from "../pages/Chat/ChatPreview";
import { Avatar } from "../styles/Avatar";

import SearchIcon from "@mui/icons-material/Search";
import { ChatContext } from "../context/ChatContext";

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [searchedName, setSearchedName] = useState("");
  const [user, setUser] = useState<UserInfoType | null>(null);
  const { dispatch } = useContext(ChatContext);
  console.log(user);

  const handleBlur = () => {
    setUser(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(currentUser?.displayName !== searchedName)) return;

    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchedName)
    );

    try {
      const querySnapshot = await getDocs(q);
      console.log("querySnapshot", querySnapshot);
      querySnapshot.forEach((doc) => {
        setUser(doc.data() as UserInfoType);
        console.log("doc.data()", doc.data());
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = async () => {
    if (!user || !currentUser) return;

    const combinedID =
      currentUser?.uid > user?.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    const docRef = doc(db, "chats", combinedID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({ type: "CHANGE_USER", payload: user });
    } else {
      const docCollection = collection(db, "chats");
      await setDoc(doc(docCollection, combinedID), { messages: [] });

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedID + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedID + ".date"]: serverTimestamp(),
        [combinedID + ".lastMessage"]: { text: "Start your new chat!" },
      });

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedID + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedID + ".date"]: serverTimestamp(),
        [combinedID + ".lastMessage"]: {
          text: "Start your new chat!",
        },
      });
    }
    setUser(null);
    setSearchedName("");
  };

  return (
    <>
      <SForm onSubmit={handleSubmit}>
        <SInput
          type="text"
          placeholder="Find your friend..."
          onChange={(e) => setSearchedName(e.target.value)}
          value={searchedName}
        />
        <SSearchIcon />
        {user && (
          <SResultsContainer>
            <SingleResult onClick={handleSelect}>
              <Avatar src={user.photoURL} alt="friend" />
              <FriendsName>{user.displayName}</FriendsName>
            </SingleResult>
          </SResultsContainer>
        )}
      </SForm>
    </>
  );
};

export default SearchBar;

const SForm = styled.form`
  position: relative;
  width: 100%;
`;

const SResultsContainer = styled.div`
  position: absolute;
  background-color: #fff;
  z-index: 9;
  top: 4.6rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
`;

const SingleResult = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #1565c0;
  border-radius: 1rem;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: inherit;
  transition: all 0.2s;

  &:hover {
    background-color: #34aa44;

    span {
      color: #fff;
    }
  }
`;

const SInput = styled.input`
  width: 100%;
  font-size: 1.8rem;
  padding: 1rem 4rem 1rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);

    &::placeholder {
      color: rgba(0, 0, 0, 0.7) !important;
    }

    + svg {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  &::placeholder {
    transition: all 0.2s;
    color: rgba(0, 0, 0, 0.3) !important;
  }
`;

const SSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  font-size: 2.5rem !important;
  transform: translateY(-54%);
  cursor: pointer;
  transition: color 0.2s !important;
  color: rgba(0, 0, 0, 0.3);
`;

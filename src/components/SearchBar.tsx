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
import { FriendsName } from "./Chats";
import { Avatar } from "./Navbar";

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [searchedName, setSearchedName] = useState("");
  const [user, setUser] = useState<DocumentData | null>(null);

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
        setUser(doc.data());
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
      console.log("There is conversation with this user already!");
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
        [combinedID + ".lastMessage"]: { text: "" },
      });

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedID + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedID + ".date"]: serverTimestamp(),
        [combinedID + ".lastMessage"]: {
          text: "",
        },
      });
    }
    setUser(null);
    setSearchedName("");
  };

  return (
    <SForm onSubmit={handleSubmit} onClick={handleBlur}>
      <SInput
        type="text"
        placeholder="Find someone..."
        onChange={(e) => setSearchedName(e.target.value)}
        value={searchedName}
      />
      <SearchIcon></SearchIcon>
      <SearchContainer>
        {user && (
          <SingleResult onClick={handleSelect}>
            <Avatar src={user.photoURL} alt="friend" />
            <FriendsName>{user.displayName}</FriendsName>
          </SingleResult>
        )}
      </SearchContainer>
    </SForm>
  );
};

export default SearchBar;

const SForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  width: 100%;
  background-color: #212529;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

const SingleResult = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #1565c0;
  border-radius: 2rem;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: inherit;

  &:hover {
    background-color: #343a40;
  }
`;

const SInput = styled.input`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  width: 100%;
  align-self: flex-start;
  color: white;
  background-color: #343a40;
  border: none;
  border-radius: 2rem;
  transition: all 0.2s, filter 0.1s;

  &::placeholder {
    color: #adb5bd;
    font-weight: 400;
  }

  &:active {
    filter: brightness(90%);
  }

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 10rem;
  background-color: #6c757d;
  transition: all 0.2s;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 10rem;
    background-color: #343a40;
    z-index: 10;
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 70%;
    content: "";
    background-color: #6c757d;
    width: 0.4rem;
    border-radius: 2rem;
    transform: rotate(-35deg);
    height: 1.5rem;
    z-index: 9;
  }

  &:hover {
    background-color: #495057;

    &::after {
      background-color: inherit;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

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
    <form onSubmit={handleSubmit}>
      <SInput
        type="text"
        placeholder="Find someone..."
        onChange={(e) => setSearchedName(e.target.value)}
        value={searchedName}
      />
      <SearchContainer>
        {user && (
          <SingleResult onClick={handleSelect}>
            <Avatar src={user.photoURL} alt="friend" />
            <FriendsName>{user.displayName}</FriendsName>
          </SingleResult>
        )}
      </SearchContainer>
    </form>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e88e5;
  border-bottom: 1px solid #005073;
  cursor: pointer;
`;

const SingleResult = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: inherit;

  &:hover {
    filter: brightness(90%);
  }
`;

const SInput = styled.input`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  width: 100%;
  color: white;
  background-color: #107dac;
  border: none;
  transition: all 0.2s;

  &::placeholder {
    color: white;
    font-weight: 400;
  }

  &:focus {
    font-size: 1.7rem;
    padding: 2rem 2rem;
    outline: none;
  }
`;

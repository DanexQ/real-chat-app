import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { db } from "../../firebase";
import * as S from "./StyledSearchBar";
import { Avatar } from "../../styles/Avatar";

import { ChatContext } from "../../context/ChatContext";
import { ChatsContext } from "../../context/ChatsContext";
import { combineId } from "../../utils/CombineId";
import { UserInfoType } from "../../interfaces/ChatsInterfaces";
import { useAddFriend } from "./useAddFriend";

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [searchedName, setSearchedName] = useState("");
  const [user, setUser] = useState<UserInfoType | null>(null);
  const { chatDispatch } = useContext(ChatContext);
  const { chatsState } = useContext(ChatsContext);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listenerFunc = (event: any) => {
      if (!resultsRef.current?.contains(event.target)) {
        setUser(null);
      }
    };

    document.addEventListener("click", listenerFunc);

    return () => {
      document.removeEventListener("click", listenerFunc);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(currentUser?.displayName !== searchedName)) return;

    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchedName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data() as UserInfoType);
      });
    } catch (err) {
      console.log(err);
    }
    resultsRef.current?.focus();
  };

  const handleSelect = async () => {
    if (!user || !currentUser) return;

    setUser(null);
    setSearchedName("");
    await useAddFriend({ currentUser, user, chatDispatch });
    // const combinedID = combineId(currentUser?.uid, user.uid);
    // const docRef = doc(db, "chats", combinedID);
    // const userChatsRef = doc(db, "userChats", currentUser!.uid);
    // const userChatsSnap = await getDoc(userChatsRef);
    // const userChats = Object.keys(userChatsSnap.data() as object);
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   chatDispatch({
    //     type: "CHANGE_USER_CHAT",
    //     payload: { user: user, combinedID: combinedID },
    //   });

    //   !userChats.includes(combinedID) &&
    //     (await updateDoc(doc(db, "userChats", currentUser.uid), {
    //       [combinedID + ".userInfo"]: {
    //         uid: user.uid,
    //         displayName: user.displayName,
    //         photoURL: user.photoURL,
    //       },
    //       [combinedID + ".date"]: serverTimestamp(),
    //       [combinedID + ".lastMessage"]: { text: "Start your chat!" },
    //       [combinedID + ".chatType"]: "user",
    //     }));
    // } else {
    //   const docCollection = collection(db, "chats");
    //   await setDoc(doc(docCollection, combinedID), { messages: [] });

    //   await updateDoc(doc(db, "userChats", currentUser.uid), {
    //     [combinedID + ".userInfo"]: {
    //       uid: user.uid,
    //       displayName: user.displayName,
    //       photoURL: user.photoURL,
    //     },
    //     [combinedID + ".date"]: serverTimestamp(),
    //     [combinedID + ".lastMessage"]: { text: "Start your new chat!" },
    //     [combinedID + ".chatType"]: "user",
    //   });

    //   await updateDoc(doc(db, "userChats", user.uid), {
    //     [combinedID + ".userInfo"]: {
    //       uid: currentUser.uid,
    //       displayName: currentUser.displayName,
    //       photoURL: currentUser.photoURL,
    //     },
    //     [combinedID + ".date"]: serverTimestamp(),
    //     [combinedID + ".lastMessage"]: {
    //       text: "Start your new chat!",
    //     },
    //     [combinedID + ".chatType"]: "user",
    //   });
    // }
  };

  return (
    <div ref={resultsRef}>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Find your friend..."
          onChange={(e) => setSearchedName(e.target.value)}
          value={searchedName}
        />
        <S.SearchIco />
        {!!user && (
          <S.ResultsContainer>
            <S.SingleResult onClick={handleSelect}>
              <Avatar src={user.photoURL} alt="friend" />
              <S.FriendsName>{user.displayName}</S.FriendsName>
              {/* function below checks if searched user is in our chats already */}
              {chatsState.filteredChats
                ?.map((chat) => chat[0])
                .includes(combineId(currentUser!.uid, user.uid)) && (
                <S.MyFriend />
              )}
            </S.SingleResult>
          </S.ResultsContainer>
        )}
      </S.Form>
    </div>
  );
};

export default SearchBar;

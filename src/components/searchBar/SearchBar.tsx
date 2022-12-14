import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { db } from "../../firebase";
import * as S from "./StyledSearchBar";
import { Avatar } from "../../styles/Avatar";
import { ChatContext } from "../../context/ChatContext";
import { ChatsContext } from "../../context/ChatsContext";
import { combineId } from "../../utils/CombineId";
import { UserInfoType } from "../../interfaces/ChatsInterfaces";
import { addFriend } from "./addFriend";

const SearchBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [searchedName, setSearchedName] = useState("");
  const [user, setUser] = useState<UserInfoType | null>(null);
  const { chatDispatch } = useContext(ChatContext);
  const { chatsState } = useContext(ChatsContext);
  const resultsRef = useRef<HTMLDivElement>(null);
  const isMyFriend =
    !!user &&
    chatsState.filteredChats
      ?.map((chat) => chat[0])
      .includes(combineId(currentUser!.uid, user.uid));

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

  const handleSelect = () => {
    if (!user || !currentUser) return;
    setUser(null);
    setSearchedName("");
    addFriend({ currentUser, user, chatDispatch });
  };

  return (
    <div ref={resultsRef}>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchedName(e.target.value)}
          value={searchedName}
        />
        <S.SearchIco />
        {!!user && (
          <S.ResultsContainer>
            <S.SingleResult onClick={handleSelect}>
              <Avatar src={user.photoURL} alt="friend" />
              <S.FriendsName>{user.displayName}</S.FriendsName>
              {isMyFriend && <S.MyFriend />}
            </S.SingleResult>
          </S.ResultsContainer>
        )}
      </S.Form>
    </div>
  );
};

export default SearchBar;

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { ChatContext } from "../../context/ChatContext";
import { ChatsContext } from "../../context/ChatsContext";
import * as S from "./StyledSidebar";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const { chatDispatch } = useContext(ChatContext);
  const { dispatch: chatsDispatch } = useContext(ChatsContext);

  const handleSingOut = () => {
    chatsDispatch({ type: "CLEAR_STATE" });
    chatDispatch({ type: "CLEAR_STATE" });
    signOut(auth);
  };

  return (
    <S.SidebarContainer>
      <S.SidebarLogo>LOGO</S.SidebarLogo>
      <S.SidebarMenu>
        <li>
          <S.ActiveLink to="/" end>
            <S.ChatIcon />
          </S.ActiveLink>
        </li>
        {/* <li>
          <S.ActiveLink to="/add">
            <S.PersonAddIcon />
          </S.ActiveLink>
        </li> */}
        <li>
          <S.ActiveLink to="/search">
            <S.PersonAddIcon />
          </S.ActiveLink>
        </li>
        <li>
          <S.ActiveLink to="/chats">
            <S.PeopleIcon />
          </S.ActiveLink>
        </li>
      </S.SidebarMenu>
      <S.SidebarAvatar
        src={currentUser!.photoURL!}
        alt="imgdsa"
        onClick={handleSingOut}
      />
    </S.SidebarContainer>
  );
};

export default Sidebar;

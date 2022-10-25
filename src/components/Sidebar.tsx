import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ChatIcon from "@mui/icons-material/Chat";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <SSidebarContainer>
      <SSidebarLogo>LOGO</SSidebarLogo>
      <SSidebarMenu>
        <li>
          <ActiveLink to="/" end>
            <SChatIcon />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/add">
            <SPersonAddIcon />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/search">
            <SPersonAddIcon />
          </ActiveLink>
        </li>
      </SSidebarMenu>
      <SSidebarAvatar src={currentUser!.photoURL!} alt="imgdsa" />
      {/* TODO: CLICK AVATAR AND PROFILE MENU SHOWS UP */}
    </SSidebarContainer>
  );
};

export default Sidebar;

const SSidebarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem 0;
  height: 100vh;
  background-color: #3f84e5;
  width: 10rem;
`;

const SSidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SSidebarAvatar = styled.img`
  width: 5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50px;
`;

const SSidebarLogo = styled.span`
  color: #fff;
  font-size: 2rem;
`;

const SIcon = styled.svg`
  font-size: 5rem !important;
  padding: 1.3rem;
  border-radius: 0.5rem;
  color: #fff;
  background: #3f84e5;
  cursor: pointer;
  transition: filter 0.2s, scale 0.1s !important;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    scale: 0.96;
  }
`;

const ActiveLink = styled(NavLink)`
  &.active {
    svg {
      background-color: #3268b3;
      &:hover {
        filter: brightness(100%);
      }
    }
  }
`;

const SChatIcon = SIcon.withComponent(ChatIcon);
const SPersonAddIcon = SIcon.withComponent(PersonAddIcon);

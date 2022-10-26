import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <SSidebarContainer>
      <SSidebarLogo>LOGO</SSidebarLogo>
      <SSidebarMenu>
        <li>
          <ActiveLink to="/" end>
            <SChatOutlinedIcon />
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
  background-color: #34aa44;
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
  font-weight: 700;
`;

const SIcon = styled.svg`
  font-size: 5rem !important;
  padding: 1.3rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #34aa44;
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
      background-color: #21960f;
      &:hover {
        filter: brightness(100%);
      }
    }
  }
`;

const SChatOutlinedIcon = SIcon.withComponent(ChatOutlinedIcon);
const SPersonAddIcon = SIcon.withComponent(PersonAddOutlinedIcon);

import styled from "styled-components";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 3rem 0;
  height: 100vh;
  background-color: #34aa44;
  width: 10rem;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarAvatar = styled.img`
  width: 5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50px;
`;

export const SidebarLogo = styled.span`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;

export const Icon = styled.svg`
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

export const ActiveLink = styled(NavLink)`
  &.active {
    svg {
      background-color: #21960f;
      &:hover {
        filter: brightness(100%);
      }
    }
  }
`;

export const ChatIcon = Icon.withComponent(ChatOutlinedIcon);
export const PersonAddIcon = Icon.withComponent(PersonAddOutlinedIcon);

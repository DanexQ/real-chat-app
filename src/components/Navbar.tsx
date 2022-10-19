import { signOut } from "firebase/auth";
import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavbarContainer>
      <Logo>Chat app</Logo>
      <Avatar src={currentUser!.photoURL!} alt="imgdsa" />
      {/* TODO: CLICK AVATAR AND PROFILE MENU SHOWS UP */}
      <Name>{currentUser?.displayName}</Name>
      <LogoutButton
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </LogoutButton>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: #005073;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 8rem;
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50px;
`;

const Name = styled.span`
  color: white;
  font-size: 1.2rem;
`;

const Logo = styled.span`
  font-size: 2rem;
  color: #fff;
  margin-right: auto;
  font-weight: 600;
`;

const LogoutButton = styled.button`
  font-size: 1.5rem;
  border: none;
  outline: none;
  border-radius: 2px;
  background-color: #189ad3;
  font-weight: 400;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    scale: 0.97;
  }
`;

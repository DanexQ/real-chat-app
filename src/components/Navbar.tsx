import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Chat app</Logo>
      <Avatar
        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="imgdsa"
      />
      <LogoutButton>Logout</LogoutButton>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: #005073;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50px;
`;

const Logo = styled.span`
  font-size: 3rem;
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
  font-weight: 700;
  color: #005073;
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
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navbar />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 100%;
  background-color: #107dac;
  grid-column: 1/3;
`;

import styled from "styled-components";
import Chats from "./Chats";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navbar />
      <SearchBar />
      <Chats />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 100%;
  background-color: #189ad3;
  grid-column: 1/3;
`;

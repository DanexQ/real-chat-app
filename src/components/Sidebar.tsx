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
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #212529;
  grid-column: 1/3;
  border-radius: 2rem 0 0 2rem;
  border-right: 1px solid #495057;
`;

import styled from "styled-components";
import { FriendsName } from "./Chats";
import { Avatar } from "./Navbar";

const SearchBar = () => {
  return (
    <>
      <SInput type="text" placeholder="Find someone..." />
      <SearchContainer>
        <SingleResult>
          <Avatar
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="friend"
          />
          <FriendsName>Dylan McGregor</FriendsName>
        </SingleResult>
        <SingleResult>
          <Avatar
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="friend"
          />
          <FriendsName>Dylan McGregor</FriendsName>
        </SingleResult>
      </SearchContainer>
    </>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #107dac;
  border-bottom: 1px solid #005073;
  cursor: pointer;
`;

const SingleResult = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: inherit;
  border-top: 1px solid #005073;

  &:hover {
    filter: brightness(90%);
  }
`;

const SInput = styled.input`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  width: 100%;
  color: white;
  background-color: #107dac;
  border: none;
  transition: all 0.2s;

  &::placeholder {
    color: white;
    font-weight: 400;
  }

  &:focus {
    font-size: 1.7rem;
    padding: 2rem 2rem;
    outline: none;
  }
`;

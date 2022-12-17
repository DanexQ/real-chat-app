import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { FriendsName as Name } from "../../features/Chats/StyledChatPreview";

export const DivRef = styled.div`
  @media only screen and (min-width: 501px) and (max-width: 900px) {
    display: none;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const ResultsContainer = styled.div`
  position: absolute;
  background-color: #fff;
  z-index: 9;
  top: 4.6rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.7);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
`;

export const MyFriend = styled(HowToRegIcon)`
  transition: all 0.2s;
  color: #34aa44;
  font-size: 2rem !important;
`;

export const SingleResult = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #1565c0;
  border-radius: 1rem;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: inherit;
  transition: all 0.2s;

  &:hover {
    background-color: #34aa44;

    ${MyFriend} {
      color: #fff;
    }

    span {
      color: #fff;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.8rem;
  padding: 1rem 4rem 1rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);

    &::placeholder {
      color: rgba(0, 0, 0, 0.7) !important;
    }

    + svg {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  &::placeholder {
    transition: all 0.2s;
    color: rgba(0, 0, 0, 0.3) !important;
  }
`;

export const SearchIco = styled(SearchIcon)`
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  font-size: 2.5rem !important;
  transform: translateY(-54%);
  cursor: pointer;
  transition: color 0.2s !important;
  color: rgba(0, 0, 0, 0.3);
`;

export const FriendsName = styled(Name)`
  margin-right: auto;
`;

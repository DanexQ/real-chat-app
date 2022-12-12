import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar as Ava } from "../../../styles/Avatar";

export const Avatar = styled(Ava)`
  align-self: flex-start;
`;

export const MessageLayout = styled.div<{ isOwner: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

export const Details = styled.span`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  gap: 1rem;
  padding: 0.5rem 0 0 0;
`;

export const Sender = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #606060;
`;

export const Date = styled.div`
  display: none;
  align-self: center;
  font-size: 1rem;
  color: #b0b0b0;
`;

export const Text = styled.span`
  padding: 1rem;
  background-color: #e0e0e0;
  font-size: 1.5rem;
  border-radius: 1rem;
  hyphens: auto;
  word-wrap: break-word;
  word-break: break-word;
  padding: 1.5rem;
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Image = styled.img`
  max-width: 20rem;
  max-height: 20rem;
`;

export const MoreIcon = styled(MoreHorizIcon)`
  visibility: hidden;
  font-size: 3rem !important;
  align-self: center;
  color: #bfbfbf;
  cursor: pointer;
  transition: color 0.2s !important;

  &:hover {
    color: #34aa44;
  }

  &:active {
    scale: 0.95;
  }
`;

export const Container = styled.div<{ isOwner: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 70%;
  margin: 0 auto 0 0;

  ${({ isOwner, theme }) =>
    isOwner &&
    `
      margin: 0 0 0 auto;
      flex-direction: row-reverse;
      justify-content: flex-start;


      ${Text}{
        background-color: ${theme.primaryColor};
        color: #fff;
      }

      ${Details}{
        flex-direction: row-reverse;
      }

      ${ContentLayout}{
        flex-direction: row;
      }

  `}

  &:hover {
    ${Date} {
      display: block !important;
    }
    ${MoreIcon} {
      visibility: visible;
    }
  }

  gap: 1rem;
`;

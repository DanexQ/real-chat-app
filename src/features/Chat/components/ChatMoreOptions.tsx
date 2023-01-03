import React, { useEffect, useState } from "react";
import * as S from "../styles/StyledChatMoreOptions";

const ChatMoreOptions = ({ hide }: { hide: boolean }) => {
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <S.MoreOptionsContainer hide={hide}>
      <ul>
        <li>Delete</li>
        <li>Pin</li>
      </ul>
    </S.MoreOptionsContainer>
  );
};

export default ChatMoreOptions;

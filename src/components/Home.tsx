import React from "react";
import styled from "styled-components";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <HomePage>
      <Sidebar />
      <Chat />
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  max-width: 140rem;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(6, minmax(10rem, 20rem));
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  overflow: hidden;
`;

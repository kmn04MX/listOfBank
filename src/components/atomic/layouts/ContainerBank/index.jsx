import React from "react";
import { useParams } from "react-router-dom";
import Titleh1 from "../../atoms/Title/Titleh1";
import Account from "../../organism/Account";
import styled from "styled-components";
import List from "../../organism/List";


const StyledContainer = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
  
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  //usar useparams
  //usar el index que se crea 
  const {bankName} = useParams();
  
  
  return (
    <StyledContainer>
      <Titleh1>{bankName}</Titleh1>
      <StyledContent>
        <Account />
        <List/> 
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;

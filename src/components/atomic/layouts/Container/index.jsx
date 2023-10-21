import Titleh1 from "../../atoms/Title/Titleh1";
import BankCard from "../../organism/BankCard";
import styled from "styled-components";
import { useState, useEffect } from 'react'
import { buscar } from "../../../../api/index";

const StyledContainer = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;





const Container = () => {
  const  [banks, setBanks] = useState([]);
  useEffect(() => {

    const storedData = JSON.parse(localStorage.getItem('Data5'));
    if(storedData == null){
      buscar("/catom/api/challenge/banks", setBanks).then((resultado) => {
        localStorage.setItem('Data5', JSON.stringify(resultado));
      });
    }else{
      console.log("Entre al else");
      setBanks(storedData);
    }
 
  }, []);
  

  return (
    <StyledContainer>
      <Titleh1>List of banks</Titleh1>
      <StyledContent>
        {banks.map((bank, index) => (
          <BankCard key={index} infoBank={bank}/>
        ))
        }
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
  
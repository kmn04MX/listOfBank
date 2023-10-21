import styled from 'styled-components';

export const BoxCuenta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({theme}) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.text};
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }

`;
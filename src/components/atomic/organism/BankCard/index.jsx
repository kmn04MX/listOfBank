import { Link } from "react-router-dom";
import {BoxCuenta} from "../../atoms/boxes/BoxCuenta";
import {Btn}  from "../../atoms/Btns/Btn";
import styled from "styled-components";


const ImageBank = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  
`;

const ContentImage = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

`;
const ContentDescription = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;

`;



const Account = ({infoBank}) => {
  const {description, age, url, bankName} = infoBank
  return (
    <BoxCuenta>
      <h2>{bankName}</h2>
        <ContentImage>
          <ImageBank src={url}/>
        </ContentImage>
        <ContentDescription>
          {description}
        </ContentDescription>
      <Link to={`/catom/api/challenge/banks/${bankName}`}>
      <Btn>
        Ver más
      </Btn>
      </Link>
    </BoxCuenta>
  );
};

export default Account;
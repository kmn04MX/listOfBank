import styled from "styled-components";
import { BoxCuenta } from "../boxCuenta";


export const BoxLista  = styled(BoxCuenta)`
filter: ${({theme})=>theme.filter};
`;


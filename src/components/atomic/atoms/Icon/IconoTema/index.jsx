import styled from "styled-components";
import { Icon } from "..";


export const IconoTema = styled(Icon)`
  filter: ${({theme})=>theme.filter};
`;
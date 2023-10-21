import React from "react";
import themeOn from '../../../../assets/imgs/themeOn.svg';
import themeOff from '../../../../assets/imgs/themeOff.svg';
import {Icon} from '../Icon';

export default (tema)=>{
    const claro = <Icon src={themeOn} alt="Tema claro"/>
    const oscuro = <Icon src={themeOff} alt="Tema oscuro"/>

    return <>{tema ? oscuro: claro}</>;
};

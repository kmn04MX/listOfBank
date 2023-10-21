import React from "react";
import alimentacion from "./assets/imgs/alimentacion.svg";
import salud from "./assets/imgs/salud.svg";
import otros from "./assets/imgs/otros.svg";
import transporte from "./assets/imgs/transporte.svg";
import utilidades from "./assets/imgs/utilidades.svg";

import { Icon } from "./components/atomic/atoms/Icon";
import { IconoTema } from "./components/atomic/atoms/Icon/IconoTema";

export default (type) =>{
    console.log(type);
    const Images = {
        Restaurante: <IconoTema src ={alimentacion} alt="Restaurante"/>,
        Salud: <IconoTema src ={salud} alt="Salud"/>,
        Otros: <IconoTema src ={otros} alt="Otros"/>,
        Transporte: <IconoTema src ={transporte} alt="Transporte"/>,
        Utilidades: <IconoTema src ={utilidades} alt="Utilidades"/>,
        defult: <IconoTema src ={otros} alt="Otros"/>
    };

    return Images[type] || Images["default"];
};
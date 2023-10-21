import React from "react";
import { BoxCuenta } from "../../atoms/boxes/BoxCuenta";
import {lista} from "../../../../info"
import { Btn } from "../../atoms/Btns/Btn";
import Card from "../Card";

const List = () =>{
    console.log(lista);
    return <BoxCuenta>
        {
            lista.cargos.map((cargo, index)=> {
                return <Card key={index} cargo={cargo}/>
            })
        }
        <Btn>Ver más</Btn>
    </BoxCuenta>;
}

export default List;
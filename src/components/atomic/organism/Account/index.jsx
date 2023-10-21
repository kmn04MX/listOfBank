import React, { useState } from "react";
import {BoxCuenta} from "../../atoms/boxes/BoxCuenta";
import {IconoTema} from "../../atoms/Icon/IconoTema";
import {Btn}  from "../../atoms/Btns/Btn";
import {IconMargin}  from "../../atoms/Icon/IconMargin";
import {Saldo}  from "../../atoms/saldo";
import {Detalle} from "../../atoms/Detalle";
import dinero from "../../../../assets/imgs/dinero.svg";
import privado from "../../../../assets/imgs/privado.svg";
import ojo from "../../../../assets/imgs/ojo.svg";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <BoxCuenta>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconoTema src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </BoxCuenta>
  );
};

export default Account;
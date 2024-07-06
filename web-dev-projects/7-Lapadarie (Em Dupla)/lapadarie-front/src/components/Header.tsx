import Image from "next/image";
import Card from "./ui/Card";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface HeaderProps{ // propriedades que vão receber as estatísticas
  pessoasFila: number;
  paesVendidos:number;
  entrada:string;
}

const Header:React.FC<HeaderProps> = ({entrada,paesVendidos,pessoasFila}) => {
 
  return (
    <header
      className={`w-full md:h-[441px] h-auto flex flex-col items-center justify-end relative md:mb-32 mb-96`}
    >
      <div className="w-full h-[374px] max-h-[374px] bg-bg-header py-20 flex items-center justify-center">
        <Image src={"/Logo.svg"} alt={""} width={155} height={113} />
      </div>
      <div className="flex md:flex-row flex-col w-full justify-center items-center gap-6 z-10 absolute top-80 px-5">
        <Card
          titulo={"Pessoas na fila"}
          cardData={`${pessoasFila}`}
          varianteCard={"card"}
          varianteData={"card-data"}
          icon={"/people.svg"}
        />
        <Card
          titulo={"Pães vendidos"}
          cardData={`${paesVendidos}`}
          varianteCard={"card"}
          varianteData={"card-data"}
          icon={"/carrinho.svg"}
        />
        <Card
          titulo={"Entrada"}
          cardData={`${entrada}`}
          varianteCard={"card2"}
          varianteData={"card-data2"}
          icon={"/Money.svg"}
        />
      </div>
    </header>
  );
};

export default Header;

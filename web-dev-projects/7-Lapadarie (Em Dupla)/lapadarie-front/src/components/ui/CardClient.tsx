import Image from "next/image";
import { MouseEventHandler, ReactEventHandler } from "react";

interface CardClientProps {
  cliente: string;
  totalPao: string;
  totalPagar: string;
  evento: any
}

interface clientDadosProps {
  texto: string;
  textoDado: string;
}

const CardClient: React.FC<CardClientProps> = ({
  cliente, //Vai receber o nome do cliente para por no card
  totalPagar,//Vai receber o total a pagar relativo a quantidade de pães do cliente
  totalPao,
  evento//Vai receber o total de pães que o cliente comprou
}) => {
  return (
    <div className=" w-full p-4 bg-bg-cardClient rounded-md flex gap-1 justify-between items-center h-fit mb-5">
      <div
        className={`
        w-full rounded-md flex flex-col gap-1 
        `}
      >
        <p className="text-base text-text-primary font-bold">{cliente}</p>
        <div className="flex gap-2 flex-wrap">
          <ClientDados texto={"Total pães"} textoDado={` ${totalPao} pães`} />
          <ClientDados
            texto={"Total a pagar"}
            textoDado={` R$ ${totalPagar}`}
          />
        </div>
        <div className="flex flex-wrap gap-2 font-bold"></div>
      </div>
      <Image src={"/delete.svg"} alt={"lixeira"} width={28} height={28} className="w-7 h-7 hover:cursor-pointer" onClick={evento}/>
    </div>
  );
};

const ClientDados: React.FC<clientDadosProps> = ({ texto, textoDado }) => {
  return (
    <p className="text-[12px] text-text-primary font-bold w-fit">
      {texto}:
      <span className="text-[12px] text-text-primary font-normal">
        {textoDado}
      </span>
    </p>
  );
};

export default CardClient;

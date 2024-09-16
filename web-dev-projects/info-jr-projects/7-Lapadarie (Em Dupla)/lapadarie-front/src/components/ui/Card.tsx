import Image from "next/image";

interface CardProps {
  titulo: string; //título ao depender da variante do card
  cardData: string; //Recebe os dados relativos a quantidade
  varianteCard: string;//recebe classe estilizada do card
  varianteData: string;//recebe classe da variante do estilo do dado
  icon:string;//recebe variante do icon
}

const Card: React.FC<CardProps> = ({
  titulo,
  cardData,
  varianteCard,
  varianteData,
  icon
}) => {
  return (
    <div className={`${varianteCard} w-full rounded-md gap-4 flex-1 grow max-w-[330px]`}>
      <p className="text-base w-full text-black flex justify-between ">
        {titulo}
        <Image src={icon} alt={"icon"} width={22} height={22} className="max-h-[22px]"/>
      </p>
      <p className={varianteData}>{cardData}</p>
    </div>
  );
};

export default Card;

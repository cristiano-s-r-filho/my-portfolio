import { usePopularGeneres } from "@/hooks/Getgenre";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cardType } from "@/types/cardType";
import Card from "./ui/Card";
import genres from "@/genres/genres";

const DiscoverList = () => {
  const { isFetched } = usePopularGeneres();

  const lista = Object.values(usePopularGeneres());
  const generos = Object.values(genres).slice(0, 19);
  console.log(lista);

  return (
    <>
      {isFetched &&
        lista?.slice(0, 19).map((genero, index) => (
          <Carousel
            opts={{
              align: "start",
              direction: "ltr",
            }}
            className="w-11/12"
            key={index}
          >
            <h1 className="mb-4 text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg">
              Most rated {generos[index]}
            </h1>
            <CarouselContent>
              {isFetched &&
                genero?.results?.map((item: cardType) => (
                  <CarouselItem className="w-fit basis-auto" key={item.id}>
                    <Card
                      key={item.id}
                      title={item.original_title}
                      rate={item.vote_average}
                      image={item.backdrop_path}
                      snap="span-start"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ))}
    </>
  );
};

export default DiscoverList;

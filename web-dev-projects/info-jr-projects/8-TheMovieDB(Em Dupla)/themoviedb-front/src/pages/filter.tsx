"use client";
import { GetMovies } from "@/hooks/getMovies";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import NavBar from "@/components/NavBar";
import { FilterBox } from "@/components/FilterBox";
import genres from "@/genres/genres";
import { useFilters } from "@/hooks/useFilters";
import Card from "@/components/ui/Card";
import { cardType } from "@/types/cardType";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const generos = Object.values(genres);
  const [genero, setGenero] = useState<any>("");
  const [classification, setClassification] = useState<string>("");
  const [organize, setOrganize] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const categorie = classification == "Adult" ? true : false;

  const { data, isFetched, isFetching, refetch } = useFilters({
    organize: organize,
    genero: genres[genero],
    categorie: categorie,
    page,
  });

  useEffect(() => {
    refetch();
    console.log(genres[genero], organize, categorie, page);
    console.log();
  }, [genero, classification, organize, page, categorie]);

  return (
    <main
      className={`relative flex h-screen w-full flex-col gap-10 overflow-x-hidden p-2 pt-0`}
    >
      <NavBar
        value={search}
        btnFn={() => console.log("oi")}
        valueChange={(e) => setSearch(e.target.value)}
        enable={false}
      />
      <section
        className={`flex h-auto w-full grid-cols-1 flex-wrap justify-center gap-4`}
      >
        <div className="flex h-auto w-full flex-wrap justify-end gap-4">
          <FilterBox
            interator={generos}
            interatorTitle="genere"
            value={genero || ""}
            selectFn={(currentValue) => {
              setGenero(currentValue === genero ? "" : currentValue);
            }}
          />
          <FilterBox
            interator={["Adult", "Kids"]}
            interatorTitle="Classification"
            value={classification || ""}
            selectFn={(currentValue) => {
              setClassification(
                currentValue === classification ? "" : currentValue,
              );
            }}
          />
          <FilterBox
            interator={["asc", "desc"]}
            interatorTitle="Org By"
            value={organize || ""}
            selectFn={(currentValue) => {
              setOrganize(currentValue === organize ? "" : currentValue);
            }}
          />
        </div>
        <Dialog open={isFetching}>
          <DialogContent className="flex h-auto w-auto items-center justify-center rounded-full bg-transparent text-2xl font-bold text-white">
            <div className="h-8 w-8 animate-spin rounded-full border-[4px] border-b-white border-l-white border-r-transparent border-t-white"></div>
          </DialogContent>
        </Dialog>
        {isFetched &&
          data?.results
            ?.slice(0, 20)
            .map((item: cardType) => (
              <Card
                key={item.id}
                title={item.original_title}
                rate={item.vote_average}
                image={item.backdrop_path}
                snap="snap-start"
              />
            ))}
      </section>
      <div className="flex w-full justify-center gap-6">
        <Button
          disabled={page == 1}
          onClick={() => setPage((e) => e - 1)}
          className="w-fit"
        >
          Prev Page
        </Button>
        <Button onClick={() => setPage((e) => e + 1)} className="w-fit">
          Next Page
        </Button>
      </div>
      <div className="flex h-auto w-full justify-center gap-12 pb-4"></div>
    </main>
  );
}

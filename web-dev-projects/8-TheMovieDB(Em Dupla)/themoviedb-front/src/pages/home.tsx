"use client"
import { GetMovies } from "@/hooks/getMovies";
import { useState } from "react";
import { cardType } from "@/types/cardType";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import NavBar from "@/components/NavBar";
import Card from "@/components/ui/Card";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [movie, setMovie] = useState("a");

  function handleSearch() {
    setMovie(search);
    setPage(1);
    refetch();
  }

  const { data, refetch, isFetching, isFetched } = GetMovies({
    movie,
    page,
  });

  return (
    <main
      className={`relative flex h-screen w-full flex-col gap-10 overflow-x-hidden p-2 pt-0`}
    >
      <NavBar
        value={search}
        btnFn={() => handleSearch()}
        valueChange={(e) => setSearch(e.target.value)}
      />
      <section
        className={`flex h-auto w-full grid-cols-1 flex-wrap justify-center gap-4`}
      >
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
      <div className="flex h-auto w-full justify-center gap-12 pb-4">
        <Button disabled={page == 1} onClick={() => setPage((e) => e - 1)}>
          Prev Page
        </Button>
        <Button onClick={() => setPage((e) => e + 1)}>Next Page</Button>
      </div>
    </main>
  );
}

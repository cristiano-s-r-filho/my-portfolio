import NavBar from "@/components/NavBar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as React from "react";
import { usePopularGeneres } from "@/hooks/Getgenre";
import DiscoverList from "@/components/DiscoverList";
const Discover = () => {
  const { isFetching, isFetched } = usePopularGeneres();

  return (
    <main
      className={`relative flex h-screen w-full flex-col gap-10 overflow-x-hidden p-2 pt-0`}
    >
      <NavBar
        value={""}
        btnFn={function (): void {
          alert("Função desativada");
        }}
        valueChange={function (e: any): void {
          alert("Função desativada");
        }}
        enable={false}
      />
      <section
        className={`flex h-auto w-full snap-x flex-col items-center justify-center gap-4`}
      >
        <Dialog open={isFetching}>
          <DialogContent className="flex h-auto w-auto items-center justify-center rounded-full bg-transparent text-2xl font-bold text-white">
            <div className="h-8 w-8 animate-spin rounded-full border-[4px] border-b-white border-l-white border-r-transparent border-t-white"></div>
          </DialogContent>
        </Dialog>
        <DiscoverList />
      </section>
    </main>
  );
};

export default Discover;

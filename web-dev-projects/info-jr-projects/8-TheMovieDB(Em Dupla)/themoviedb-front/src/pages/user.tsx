
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [atualizar, setAtualizar] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("nome");
      const storedEmail = localStorage.getItem("email");
      const storedId = localStorage.getItem("id");
      

      setUser(storedUser);
      setEmail(storedEmail);
      setId(storedId);
    }
  }, []);

  useEffect(() => {
    async function getFavorite() {
      try {
        const response = await axios.get(
          `http://localhost:7001/tmdb-app/favorites/${id}`,
        );
        setFavorites(response.data.favorite);
        console.log(favorites);
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      }
    }

    getFavorite();
  }, [id, atualizar, favorites]);

  function handleLogout() {
    if (typeof window !== "undefined") {
      alert("Deslogou");
      localStorage.removeItem("email");
      localStorage.removeItem("senha");
      localStorage.removeItem("nome");
      localStorage.removeItem("id");
      setUser(null);
      setEmail(null);
      setId(null);
    }
  }

  async function handleDelete(titulol:string){
    const user = Number(localStorage.getItem("id") )
    const titulo = titulol;
    const data = {titulo, user}
    const response = await axios.delete('http://localhost:7001/tmdb-app/delete_favorite', {data:data})
    setAtualizar(true)
  }

  return (
    <section className={`flex h-full w-full flex-col`}>
      <NavBar
        value={""}
        btnFn={() => alert("Não implementado")}
        valueChange={() => alert("Não implementado")}
        enable={false}
      />
      <section className="flex flex-col gap-2 p-2">
        <h1
          className={`text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg`}
        >
          Profile
        </h1>
        <span className={`text-base text-dark-border`}>
          This is your profile informations
        </span>
        <div className="flex flex-col gap-4">
          <label htmlFor="Username">
            Username
            <Input placeholder={user?.toString()} disabled />
          </label>
          <label htmlFor="Email">
            Email
            <Input placeholder={email?.toString()} disabled />
          </label>
          <Link href="/">
            <Button variant={"destructive"} onClick={() => handleLogout()}>
              Logout
            </Button>
          </Link>
        </div>
      </section>
      <h1 className={`text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg`}>
        Your favorites Movies
      </h1>
      <section
        className={`flex h-auto w-full grid-cols-1 flex-wrap justify-center gap-4`}
      >
        {favorites.map((item, index) => (
          <Card
            title={item.title}
            rate={0}
            image={`${item.content}`}
            snap={"center"}
            key={index}
            delete={true}
            deleteFn={() => handleDelete(item.title?.toString())}
          />
        ))}
      </section>
      <section className="flex h-auto w-full flex-wrap"></section>
    </section>
  );
};

export default User;

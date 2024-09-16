import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateUser } from "@/hooks/useCreateUser";
import { dataTagSymbol } from "@tanstack/react-query";
import Link from "next/link";
import { MouseEvent, useState } from "react";

const Signin = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const { mutate, isSuccess, data: response } = useCreateUser();

  function handleSubmit(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const login = email;
    const data = { nome, login, senha };
    if (nome.trim() == "" || login.trim() == "" || senha.trim() == "") {
      alert("Todos os campos precisam ser preenchidos");
      return;
    }

    mutate(data, {
      onSuccess: (data) => {
        localStorage.setItem("email", login);
        localStorage.setItem("nome", nome);
        localStorage.setItem("senha", senha);
        localStorage.setItem("id", data.data.id) // Acessa o ID do usuário criado
        console.log(data.data)
      } })
  }

  return (
    <section
      className={`flex h-screen w-full flex-col items-center justify-center bg-primary-color px-4 dark:bg-dark-bg`}
    >
      <h1 className="text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg">
        InfoMovies
      </h1>
      <section className="flex h-auto max-w-[696px] flex-col gap-14 bg-primary-color dark:bg-dark-bg">
        <div className="flex flex-col justify-center gap-3 *:text-center">
          <h1
            className={`text-2xl font-semibold text-btn-bg dark:bg-dark-btn-bg`}
          >
            Create an account
          </h1>
          <p className={`text-sm text-dark-border dark:bg-dark-border`}>
            Email you email bellow to create your account
          </p>
        </div>

        <form
          className={`flex w-full flex-col items-center justify-center gap-4`}
        >
          <Input
            type="text"
            placeholder="UserName"
            className="w-full outline-0"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            required={true}
          />
          <Input
            type="email"
            placeholder="name@example.com"
            className="w-full outline-0"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required={true}
          />
          <Input
            type="password"
            placeholder="password"
            className="w-full outline-0"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            required={true}
          />
          <Button className="w-full" onClick={(e) => handleSubmit(e)}>
            Sign In with Email
          </Button>
          <Link
            href={"/home"}
            className={`w-full text-center text-blue-600 ${isSuccess == true ? "flex" : "hidden"}`}
          >
            Venha para home
          </Link>

          <p
            className={`after:border-1 before:border-1 flex w-full items-center justify-center gap-2 text-[12px] font-semibold text-primary-border before:flex before:h-[1px] before:w-full before:flex-1 before:border-primary-border before:bg-primary-border after:h-[1px] after:w-full after:flex-1 after:border-primary-border after:bg-primary-border`}
          >
            OR CONTINUE WITH
          </p>
          <Link href={"/login"} className="w-full">
            <Button className="w-full" variant={"outline"}>
              Already an account? Login here.
            </Button>
          </Link>
        </form>
        <p className={`text-center text-sm text-dark-border`}>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </section>
    </section>
  );
};

export default Signin;

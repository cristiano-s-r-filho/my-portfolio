import prisma from "./prisma";
import { Request, Response } from "express";

/* Funcões De Controle - USER 
1 - Função de cadastro do User */
export async function cadastro_user(req: Request, res: Response) {
  try {
    const { nome, login, senha } = req.body;
    // Checando se o nome e a senha providos são válidos
    if (String(nome).match(/[0-9]/) != null) {
      throw new Error("O nome deve não deve conter numeros");
    }
    if (String(senha).length <= 5) {
      throw new Error("Senha muito curta");
    }
    // Checando se o usuário já existe.
    const CheckEmail = await prisma.user.findUnique({
      where: { email: login },
    });
    if (CheckEmail !== null) {
      throw new Error("Usuário já cadastrado");
    }
    // Gerando retorno padrão esperado
    const addUser = await prisma.user.create({
      data: { email: login, name: nome, password: senha },
    });
    res.status(200).send(addUser);
  } catch (error: any) {
    console.log(error);
    res
      .status(400)
      .json({ msg: "Ocorreu um erro ao tentar cadastrar seu usuário!" })
      .send();
  }
}
// 2 - Rota de pegar o User
export async function get_user(req: Request, res: Response) {
  try {
    const { login, senha } = req.query; // Pegando login e senha dos parâmetros de URL
    const user = await prisma.user.findFirst({
      where: { email: login as string, password: senha as string },
    });

    if (!user) {
      return res.status(400).json({ msg: "Email ou senha incorretos" });
    }

    res.status(200).json(user);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ msg: "Erro interno do servidor" });
  }
}

/* Funções de Controle - Movies
 1 - Pegar os filmes favoritos de um usuário*/
export async function get_Favorites(req: Request, res: Response) {
  try {
    /*Dados do usuário especifico - Possivelmente deverá ser alterado mais tarde
         por enquanto o que precisamos é do user_id*/
    const { id } = req.params;
    /*const IsValidUser = await prisma.user.findUnique({where:{id: Number(id)}})
        // Validando o usuário por desencargo de consciência
        if(IsValidUser == null){
            throw new Error("Usuário Inválido!")
        }*/
    // Fetch dos dados de Favoritos.
    const getFavs = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: { favorite: true },
    });
    if (getFavs !== null) {
      res.status(200).send(getFavs);
    } else {
      res
        .status(200)
        .json({ msg: "Este usuário ainda não favoritou nada!" })
        .send();
    }
  } catch (error: any) {
    console.log(error);
    res
      .status(400)
      .json({ msg: "Erro ao requisitar lista de favoritos!" })
      .send();
  }
}
// 2 - criar novos favoritos
export async function new_Favorites(req: Request, res: Response) {
  try {
    const { user, titulo, conteudo } = req.body;
    /*Aqui vai vir mais tarde a validação do titulo escolhido - pra ver se ele existe na database do TMBD
            ...Aguarde! Estamos trabalhando nisso!!! Cenas dos proximos capitulos.  
        */
    const newFavs = await prisma.movies.create({
      data: { title: titulo, content: conteudo, userId: user },
    });
    res.status(200).send(newFavs);
  } catch (error: any) {
    console.log(error);
    res
      .status(400)
      .json({ msg: "Erro encontrado ao tentar favoritar um filme!" });
  }
}
// 3 - deletar um favorito antigo
export async function delete_Favorites(req: Request, res: Response) {
  try {
    const { user, titulo } = req.body;
    /*Aqui vai vir mais tarde a validação do titulo escolhido , tal qual na função acima- pra ver se ele existe na database do TMBD
            ...Aguarde! Estamos trabalhando nisso!!! Cenas dos proximos capitulos.  
        */
    // Database queries pra conseguir pegar o filme especifico no usuário especifico...
    const movie_to_delete = await prisma.movies.findMany({
      where: { userId: user, title: titulo },
      select: { movieId: true },
    });
    console.log(movie_to_delete)
    const delFavs = await prisma.movies.delete({
      where: { movieId: Number(movie_to_delete[0].movieId) },
    });
    res.status(200).send(delFavs);
  } catch (error: any) {
    console.log(error);
    res
      .status(400)
      .json({
        msg: "Ocorreu um erro ao retificar/deletar um favorito do usuário XXXX",
      });
  }
}

import GetPopular from "@/hooks/getPopular";
import genres from "../genres/genres";

export const usePopularGeneres = () => {
  const { data: acao } = GetPopular(genres.Ação.toString());
  const { data: aventura } = GetPopular(genres.Aventura.toString());
  const { data: animacao } = GetPopular(genres.Animação.toString());
  const { data: comedia } = GetPopular(genres.Comédia.toString());
  const { data: crime } = GetPopular(genres.Crime.toString());
  const { data: documentario } = GetPopular(genres.Documentário.toString());
  const { data: drama } = GetPopular(genres.Drama.toString());
  const { data: familia } = GetPopular(genres.Família.toString());
  const { data: fantasia } = GetPopular(genres.Fantasia.toString());
  const { data: historia } = GetPopular(genres.História.toString());
  const { data: terror } = GetPopular(genres.Terror.toString());
  const { data: musica } = GetPopular(genres.Música.toString());
  const { data: misterio } = GetPopular(genres.Mistério.toString());
  const { data: romance } = GetPopular(genres.Romance.toString());
  const { data: ficcaoCientifica } = GetPopular(
    genres["Ficção científica"].toString(),
  );
  const { data: cinemaTv } = GetPopular(genres["Cinema TV"].toString());
  const { data: thriller } = GetPopular(genres.Thriller.toString());
  const { data: guerra } = GetPopular(genres.Guerra.toString());
  const {
    data: Faroeste,
    isFetched,
    isFetching,
  } = GetPopular(genres.Faroeste.toString());

  return {
    acao,
    aventura,
    animacao,
    comedia,
    crime,
    documentario,
    drama,
    familia,
    fantasia,
    historia,
    terror,
    musica,
    misterio,
    romance,
    ficcaoCientifica,
    cinemaTv,
    thriller,
    guerra,
    Faroeste,
    isFetched,
    isFetching,
  };
};

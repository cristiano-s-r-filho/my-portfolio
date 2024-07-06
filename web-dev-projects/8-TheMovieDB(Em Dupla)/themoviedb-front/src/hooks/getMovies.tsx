import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

interface fetchProps {
  movie: string;
  page: number;
}

const fetchDados = async ({ movie, page = 1 }: fetchProps) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&page=${page}&language=pt-BR&sort_by=vote_average.desc&api_key=2f8e1676e96fec4439d0058d101c7270`
  );

  return response?.data;
};

export function GetMovies({ movie, page = 1 }: fetchProps) {
  const query = useQuery({
    queryFn: () => fetchDados({ movie, page }),
    queryKey: ["movies", page, movie],
    placeholderData: keepPreviousData,
  });

  return query;
}

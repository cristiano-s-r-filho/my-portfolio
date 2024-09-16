import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDados = async (genre: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=vote_count.desc&with_genres=${genre}&api_key=2f8e1676e96fec4439d0058d101c7270`,
  );

  return response?.data;
};

export function GetPopular(genre: string) {
  const query = useQuery({
    queryFn: () => fetchDados(genre),
    queryKey: ["movies", genre],
  });

  return query;
}

export default GetPopular;

import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

interface fetchProps {
  page: number;
  categorie: boolean;
  genero: string;
  organize: string;
}

const fetchDados = async ({
  organize = "asc",
  page = 1,
  categorie = false,
  genero = "12",
}: fetchProps) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=${categorie}&include_video=false&language=en-US&page=${page}&sort_by=vote_count.${organize}&with_genres=${genero}&api_key=2f8e1676e96fec4439d0058d101c7270`,
  );

  return response?.data;
};

export function useFilters({
  genero = "12",
  page = 1,
  categorie = false,
  organize = "desc",
}: fetchProps) {
  const client = useQueryClient();
  const query = useQuery({
    queryFn: () => fetchDados({ genero, page, categorie, organize }),
    queryKey: ["movies", page, genero, page, categorie],
    placeholderData: keepPreviousData,
  });

  return query;
}

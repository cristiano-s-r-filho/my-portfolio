import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function handleSubmit(data: any) {
  const response = await axios.post(
    "http://localhost:7001/tmdb-app/sigin",
    data,
  );
  return response;
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cadastro"] });
    },
  });

  return mutate;
}

import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants";

export const useMatchQuery = (matchId: string) => {
  return useQuery({
    queryKey: ["match", matchId],
    queryFn: () => {
      if (matchId === "") return {};

      return fetch(BASE_URL + `/matcwskvjrfjkhes/${matchId}`).then((res) =>
        res.json()
      );
    },
  });
};

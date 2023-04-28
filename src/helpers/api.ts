import { useQuery } from "@tanstack/react-query";
import { empty } from "./functions";

const url = import.meta.env.VITE_API_URL;
var options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

export const fetchAllIdentifications = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['identifications'], 
    queryFn: () => fetch(`${url}/admin/identifications?limit=40`, options).then(
        (response) => response.json(),
      ),
  });

  return empty(data) ? { isLoading: true, identifications: null } : { isLoading: isLoading, identifications: data?.identifications };
}

export const fetchSingleIdentification = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['identification'], 
    queryFn: () => fetch(`${url}/admin/identifications/identification/${id}`, options).then(
        (response) => response.json(),
      ),
  });

  return empty(data) ? { isLoading: true, identification: null } : { isLoading: isLoading, identification: data?.identification };
}

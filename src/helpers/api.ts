import { useQuery } from "@tanstack/react-query";
import { empty } from "./functions";

export const url = import.meta.env.VITE_API_URL || 'https://api.buildadom.net/api/v1';
var options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

export const fetchAllIdentifications = () => {
  return useQuery({
    queryKey: ['all-identifications'], 
    queryFn: () => fetch(`${url}/admin/identifications?limit=40`, options).then(
        (response) => response.json(),
      ),
  });
}

export const fetchSingleIdentification = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['single-identification'], 
    queryFn: () => fetch(`${url}/admin/identifications/identification/${id}`, options).then(
        (response) => response.json(),
      ),
  });

  return empty(data) ? { isLoading: true, identification: null } : { isLoading: isLoading, identification: data?.identification };
}

export const VerifySingleIdentification = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['verify-identification'], 
    queryFn: () => fetch(`${url}/admin/identifications/verify/${id}`, options).then(
        (response) => response.json(),
      ),
  });

  return empty(data) ? { isLoading: true, identification: null } : { isLoading: isLoading, identification: data?.identification };
}

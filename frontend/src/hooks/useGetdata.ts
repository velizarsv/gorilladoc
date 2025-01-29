import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

/**
 * Custom hook for fetching data using React Query.
 * @param {string} key - Unique query key.
 * @param {string} url - API endpoint to fetch data from.
 * @param {UseQueryOptions<TData, Error>} options - Additional options for React Query.
 * @returns {UseQueryResult<TData, Error>} - Query result containing data, error, loading state, etc.
 */
export function useFetchData<TData>(
  key: string, 
  url: string, 
  options?: UseQueryOptions<TData, Error>
): UseQueryResult<TData, Error> {

  const fetchData = async (): Promise<TData> => {
    const response: AxiosResponse<TData> = await axios.get(url);
    return response.data;
  };

  return useQuery<TData, Error>({
    queryKey: [key],
    queryFn: fetchData,
    ...options, // Allows customization (e.g., staleTime, refetchInterval)
  });
}



/*  usage
import { useFetchData } from "./useFetchData";

// Define the expected data type
interface Post {
  id: number;
  title: string;
  body: string;
}
const { data, error, isLoading } = useFetchData<Post[]>("posts", "https://jsonplaceholder.typicode.com/posts");
**/ 
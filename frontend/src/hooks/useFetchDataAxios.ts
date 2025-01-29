import axios from 'axios';
import { useState, useEffect } from 'react';

export type FetchState<T> = {
	data: T | null;
	error: string | null;
	isLoading: boolean;
};
function useFetchDataAxios<T>(url: string): FetchState<T> {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				const jsonData: T = response.data;
				setData(jsonData);
			} catch (error) {
				setError((error as Error).message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { data, error, isLoading };
}

export default useFetchDataAxios;

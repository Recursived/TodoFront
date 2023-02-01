import {Todo} from "src/utils/seed";
import {useEffect, useState} from "react";

type PrismaResponse = {
	isLoading : boolean;
	payload?: Todo[];
	error?: object;
};


function useFetch(f : () => Promise<Todo[]>) : PrismaResponse {
	const [isLoading, setLoading] = useState(!!f);
	const [payload, setPayload] = useState<Todo[]>([]);
	const [error, setError] = useState<object>({});
	useEffect(() => {
		if (!f) return;
		f().then((data : Todo[]) => {
			setLoading(false);
			setPayload(data);
		})
		.catch((error: Error) => {
			setLoading(false);
			setError(error);
		})
	}, [!!f]);



	return {
		isLoading: isLoading,
		payload : payload,
		error: error
	};
}

export default useFetch;

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export interface IUser {
	name: string;
	avatar: string;
	email: string;
	step_started?: string;
	steps_completed?: string[];
}

export default function useAuth(): [IUser | undefined, (data: Partial<IUser>) => void] {
	const queryClient = useQueryClient();
	const user: IUser | undefined = queryClient.getQueryData(["user"]);

	const setUser = (data: Partial<IUser>) => {
		localStorage.setItem("user", JSON.stringify(data));
		queryClient.setQueryData(["user"], () => {
			return {
				...(user || ({} as IUser)),
				...data,
			} as IUser;
		});
	};

	useEffect(() => {
		if (localStorage.getItem("user")) {
			setUser(JSON.parse(localStorage.getItem("user") as string));
		}
	}, []);

	return [user, setUser];
}

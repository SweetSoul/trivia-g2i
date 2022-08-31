import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import LoginForm from "./login.form";

export default function UserLogin() {
	const [user, setUser] = useAuth();

	return (
		<div>
			{user ? (
				<div>
					<img src={user.avatar} />
				</div>
			) : (
				<LoginForm />
			)}
		</div>
	);
}

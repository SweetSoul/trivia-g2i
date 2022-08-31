import { useState } from "react";
import GenericButton from "../Buttons/genericButton";
import TextBox from "../FormControls/TextBox/textBox";
import RegisterModal from "../Modal/register.modal";
import styles from "./login.module.sass";

export default function LoginForm() {
	const [email, setEmail] = useState<string>("");

	return (
		<>
			<div className={styles.container}>
				<TextBox
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
					aria-label="email input"
				/>
				<GenericButton type="submit" version="login" aria-label="login button">
					Login
				</GenericButton>
			</div>
			<RegisterModal text="Don't have an account? Click here." />
		</>
	);
}

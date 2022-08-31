import { useRef, useState } from "react";
import { API_URL } from "../../constants/common";
import useAuth, { IUser } from "../../hooks/useAuth";
import { lzw_encode } from "../../utils/storageCompressor.util";
import GenericButton from "../Buttons/genericButton";
import ImageBox from "../FormControls/ImageBox/imageBox";
import TextBox from "../FormControls/TextBox/textBox";
import Modal from "./modal";
import styles from "./register.module.sass";

interface IProps {
	text: string;
}

export default function RegisterModal(props: IProps) {
	return <Modal triggerType="link" triggerText={props.text} title="Register" body={<RegisterForm />} />;
}

function RegisterForm() {
	const [avatar, setAvatar] = useState<File | null>(null);
	const [hasError, setHasError] = useState(false);

	const [user, setUser] = useAuth();
	const email = useRef<string>("");
	const name = useRef<string>("");
	const errors = useRef<{ email: boolean; name: boolean; avatar: boolean }>({
		email: false,
		name: false,
		avatar: false,
	});
	const emailRegex = "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+";

	const handleSubmit = () => {
		if (!avatar) {
			errors.current.avatar = true;
		}
		if (!email.current || !email.current.match(emailRegex)) {
			errors.current.email = true;
		}
		if (!name.current) {
			errors.current.name = true;
		}
		if (Object.values(errors.current).some((v) => v)) {
			setHasError(true);
			return;
		}
		let image64 = "";
		const reader = new FileReader();
		reader.readAsDataURL(avatar!);
		reader.onload = () => {
			image64 = reader.result as string;
		};
		const tempUser: IUser = {
			email: email.current,
			name: name.current,
			avatar: lzw_encode(image64),
		};
		setUser(tempUser);
	};

	return (
		<div className={styles.form}>
			<ImageBox file={avatar} setFile={setAvatar} />
			<TextBox
				id="email"
				name="email"
				type="text"
				placeholder="Your email"
				className={styles.formInputs}
				aria-label="email input"
				onChange={(e) => {
					email.current = e.target.value;
					setHasError(false);
					errors.current.email = false;
				}}
				isInvalid={hasError && errors.current.email}
				invalidText="Please enter a valid email"
			/>
			<TextBox
				id="name"
				name="name"
				type="text"
				placeholder="Your name"
				className={styles.formInputs}
				aria-label="name input"
				onChange={(e) => {
					name.current = e.target.value;
					setHasError(false);
					errors.current.name = false;
				}}
				isInvalid={hasError && errors.current.name}
				invalidText="Please enter your name"
			/>
			<GenericButton type="button" version="secondary" onClick={handleSubmit}>
				Sign up
			</GenericButton>
		</div>
	);
}

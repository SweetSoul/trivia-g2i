import UserLogin from "../Login/userLogin";
import styles from "./header.module.sass";

export default function Header() {
	return (
		<header>
			<div className={styles.container}>
				<UserLogin />
			</div>
		</header>
	);
}

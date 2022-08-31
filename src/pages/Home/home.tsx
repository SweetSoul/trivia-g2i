import GenericButton from "../../components/Buttons/genericButton";
import styles from "./home.module.sass";

export default function Home() {
	return (
		<div className={styles.container}>
			<div>
				<h1 className="fw-900">Welcome to the Trivia Challenge!</h1>
				<h2></h2>
			</div>
			<div className={styles.boolQuizz}>
				<p className="fs-22 fw-700">You will be presented with 10 True or False questions.</p>
			</div>
			<div>
				<p className="fs-22 fw-700">Can you score 100%?</p>
			</div>
			<div>
				<GenericButton version="primary" className="fs-22 fw-700" type="button">
					BEGIN
				</GenericButton>
			</div>
		</div>
	);
}

import { useRef } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import GenericButton from "../../Buttons/genericButton";
import styles from "./imageBox.module.sass";

interface IProps {
	file: File | null;
	setFile: (file: File | null) => void;
}

export default function ImageBox(props: IProps) {
	const { file, setFile } = props;
	const styleRef = useRef<HTMLDivElement | null>(null);
	const fileInput = useRef<HTMLInputElement | null>(null);

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		styleRef.current?.classList.add(styles.dragOver);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		styleRef.current?.classList.remove(styles.dragOver);
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		setFile(file);
	};

	return (
		<>
			<label htmlFor="image">{file ? "Selected avatar:" : "Select your avatar:"}</label>
			<input
				name="image"
				type="file"
				onChange={(e) => setFile(e?.currentTarget?.files?.[0] ?? null)}
				hidden
				ref={fileInput}
			/>
			{file ? (
				<div>
					<div className={styles.imageSelected}>
						<img src={URL.createObjectURL(file)} />
					</div>
					<GenericButton
						type="button"
						onClick={() => setFile(null)}
						className={styles.changeImage}
						version="link"
					>
						Change image
					</GenericButton>
				</div>
			) : (
				<div
					className={styles.imageBox}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					ref={styleRef}
					onClick={() => fileInput.current?.click()}
				>
					<>
						<div className={styles.imagePlaceholder}>
							<AiOutlinePicture size={40} />
							<h5>
								Click to select a file <br />
								or drag n' drop it here.
							</h5>
						</div>
					</>
				</div>
			)}
		</>
	);
}

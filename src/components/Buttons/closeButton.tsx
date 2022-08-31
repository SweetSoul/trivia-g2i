import { AiFillCloseCircle } from "react-icons/ai";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
	onClose: Function;
}

export default function CloseButton(props: IProps) {
	const { onClose, ...rest } = props;

	const handleClose = () => {
		onClose();
	};

	return (
		<button onClick={handleClose} {...rest}>
			<AiFillCloseCircle />
		</button>
	);
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	isInvalid?: boolean;
	invalidText?: string;
}

export default function TextBox(props: IProps) {
	const { className, ...rest } = props;
	return (
		<>
			<input
				type="text"
				className={`formControl ${props.className}${props.isInvalid ? " invalid" : ""}`}
				{...rest}
			/>
			{props.isInvalid && <span className="invalidHelper">{props.invalidText}</span>}
		</>
	);
}

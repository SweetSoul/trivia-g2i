interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
	version?: "primary" | "secondary" | "tertiary" | "login" | "link";
	type: "button" | "submit" | "reset";
}

export default function GenericButton(props: IProps) {
	const { children, version, className, ...rest } = props;
	const finalClass = `${version || "primary"}-btn ${className || ""}`;
	return (
		<button className={finalClass} {...rest}>
			{props.children}
		</button>
	);
}

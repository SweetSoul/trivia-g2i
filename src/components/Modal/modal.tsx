import { useState } from "react";
import CloseButton from "../Buttons/closeButton";
import GenericButton from "../Buttons/genericButton";
import "./modal.sass";

interface IProps {
	title?: string;
	triggerType?: "primary" | "link";
	triggerText?: string;
	body: React.ReactNode[] | JSX.Element;
	footer?: React.ReactNode[] | JSX.Element;
}

export default function Modal(props: IProps) {
	const [show, setShow] = useState(false);

	return (
		<>
			<GenericButton
				type="button"
				version={props.triggerType ?? "primary"}
				onClick={() => setShow(true)}
				className="modalTrigger"
			>
				{props.triggerText}
			</GenericButton>
			{show && (
				<div className="modal">
					<div className="modalBackdrop">
						<div className="modalContainer">
							<div className="modalHeader">
								{props.title ? <h2>{props.title}</h2> : null}
								<CloseButton onClose={() => setShow(false)} className="modalCloseBtn" />
								{props.title ? <hr className="modalHeaderDivider" /> : null}
							</div>
							<div className="modalBody">{props.body}</div>
							{!!props.footer && <div className="modalFooter">{props.footer}</div>}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

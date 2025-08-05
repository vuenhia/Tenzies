export default function Die(props) {
	return (
		<div className="grid-container">
			<button
				style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
				onClick={props.hold}
			>
				{props.value}
			</button>
		</div>
	);
}

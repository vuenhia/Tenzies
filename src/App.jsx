import Die from "./assets/Components/Die.jsx";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function App() {
	const [dice, setDice] = useState(generateAllNewDice());

	const hold = (id) => {
		setDice((prevDice) =>
			prevDice.map((dice) => {
				return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
			})
		);
	};
	const rollDice = () => {
		setDice((prevDice) =>
			prevDice.map((dice) =>
				dice.isHeld
					? dice
					: { ...dice, value: Math.floor(Math.random() * 6) + 1 }
			)
		);
	};
	function generateAllNewDice() {
		return new Array(10).fill(0).map(() => ({
			value: Math.floor(Math.random() * 6) + 1,
			isHeld: false,
			id: nanoid(),
		}));
	}

	const diceElements = dice.map((dieObject) => (
		<Die
			key={dieObject.id}
			value={dieObject.value}
			isHeld={dieObject.isHeld}
			hold={() => hold(dieObject.id)}
		/>
	));
	return (
		<main>
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			<div className="dice-container">{diceElements}</div>

			<button className="rollBtn" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}

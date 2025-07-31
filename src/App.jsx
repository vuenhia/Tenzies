import Die from "./assets/Components/Die.jsx";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function App() {
	/**
	 * Challenge: Update the array of numbers in state to be
	 * an array of objects instead. Each object should look like:
	 * { value: <random number>, isHeld: false }
	 *
	 * Making this change will break parts of our code, so make
	 * sure to update things so we're back to a working state
	 */

	// array of objects
	const [dice, setDice] = useState(generateAllNewDice());

	function generateAllNewDice() {
		return new Array(10)
			.fill(0)
			.map(() => ({
				value: Math.floor(Math.random() * 6) + 1,
				isHeld: false,
				id: nanoid(),
			}));
	}

	const rollDice = () => {
		setDice(generateAllNewDice());
	};
	const diceElements = dice.map((dieObject) => (
		<Die key={dieObject.id} value={dieObject.value} />
	));
	return (
		<main>
			<div className="dice-container">{diceElements}</div>

			<button className="rollBtn" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}

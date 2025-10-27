import React from "react";

export default function SelectField({
	label,
	listChoice,
}: {
	label: string;
	listChoice: string[];
}) {
	return (
		<label>
			<h2>{label}</h2>
			<select>
				{listChoice.map((choice) => (
					<option value={choice}>{choice}</option>
				))}
			</select>
		</label>
	);
}

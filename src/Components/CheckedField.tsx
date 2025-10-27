import React from "react";
import { useFieldContext } from "../Form/context";

export default function CheckedField({ label }: { label: string }) {
	const field = useFieldContext<boolean>();
	return (
		<label>
			<h2>{label}</h2>
			<input
				type="checkbox"
				checked={field.state.value}
				onChange={(e) => field.handleChange(e.target.checked)}
				onBlur={field.handleBlur}
			/>
		</label>
	);
}

import { useFieldContext } from "../Form/context";

export default function TextField({
	label,
	placeholder,
}: {
	label: string;
	placeholder: string;
}) {
	const field = useFieldContext<string>();

	return (
		<label>
			<h2>{label}</h2>
			<input
				type="text"
				placeholder={placeholder}
				value={field.state.value}
				onBlur={field.handleBlur}
				onChange={(e) => field.handleChange(e.target.value)}
			/>
			{field.state.meta.errors?.[0] && (
				<p className="text-sm text-red-500 mt-1">
					{field.state.meta.errors[0]}
				</p>
			)}
		</label>
	);
}

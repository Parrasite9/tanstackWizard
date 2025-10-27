import { useFieldContext } from "../Form/context";

export default function NumberField({
	label,
	placeholder,
}: {
	label: string;
	placeholder?: string;
}) {
	const field = useFieldContext<number>();

	return (
		<label>
			<h2>{label}</h2>
			<input
				type="number"
				placeholder={placeholder}
				value={field.state.value}
				onBlur={field.handleBlur}
				onChange={(e) => field.handleChange(Number(e.target.value))}
			/>
			{field.state.meta.errors?.[0] && (
				<p className="text-sm text-red-500 mt-1">
					{field.state.meta.errors[0]}
				</p>
			)}
		</label>
	);
}

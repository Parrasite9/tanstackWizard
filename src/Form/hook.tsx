import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import NumberField from "../Components/NumberField";
import SelectField from "../Components/SelectField";
import SubmitButton from "../Components/SubmitButton";
import TextField from "../Components/TextField";
import CheckedField from "../Components/CheckedField";

const { fieldContext, formContext } = createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		NumberField,
		SelectField,
		CheckedField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});

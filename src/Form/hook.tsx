import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import NumberField from "../Components/NumberField";
import SelectField from "../Components/SelectField";
import SubmitButton from "../Components/SubmitButton";
import TextField from "../Components/TextField";

const { fieldContext, formContext } = createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		NumberField,
		SelectField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});

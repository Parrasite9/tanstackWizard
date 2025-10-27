import z from "zod";
import { useAppForm } from "../Form/hook";
import { useState } from "react";

const userSchema = z.object({
	name: z.string(),
	age: {
		month: z.number(),
		day: z.number().min(2).max(2),
		year: z.number().min(4).max(4),
	},
	gender: z.enum(["male", "female", "alien"]),
	address: {
		city: z.string(),
		state: z.string(),
		zipcode: z.number().min(5).max(5),
	},
	position: z.string(),
	terms: z.boolean(),
});

const defaultValues: z.input<typeof userSchema> = {
	name: "",
	age: {
		month: "MM",
		day: "DD",
		year: "YYYY",
	},
	gender: "alien",
	address: {
		city: "",
		state: "",
		zipcode: 12345,
	},
	position: "",
	terms: false,
};

const genderOptions = ["male", "female", "alien"];

export default function ApplicationForm() {
	const [currentStep, setCurrentStep] = useState(1);

	function nextStep() {
		setCurrentStep((prev) => prev + 1);
		console.log("Current Step is: " + currentStep);
	}

	const form = useAppForm({
		defaultValues,
		validators: { onChange: userSchema },
		onSubmit: ({ value }) => {
			console.log("[SUBMIT OK]", value); // ✅ fires only when valid
			alert(JSON.stringify(value, null, 2));
		},
	});

	return (
		<div className="flex flex-col justify-center border-solid border-2 p-4 bg-gray-400 w-3/4">
			<h1 className="text-xl font-bold text-center">Application Wizard</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
				className="border-solid border-4 flex flex-col"
			>
				{currentStep == 1 && (
					<>
						<form.AppField name="name">
							{(field) => (
								<field.TextField label="Name" placeholder="Full Name" />
							)}
						</form.AppField>

						<div className="date__of__birth flex">
							<form.AppField name="age.month">
								{(field) => (
									<field.NumberField label="Month" placeholder="MM" />
								)}
							</form.AppField>

							<form.AppField name="age.day">
								{(field) => <field.NumberField label="Day" placeholder="DD" />}
							</form.AppField>

							<form.AppField name="age.year">
								{(field) => (
									<field.NumberField label="Year" placeholder="YYYY" />
								)}
							</form.AppField>
						</div>

						<button onClick={nextStep} className="bg-blue-300 w-1/5">
							Next
						</button>
					</>
				)}

				{currentStep == 2 && (
					<>
						<div className="flex flex-col">
							<form.AppField name="gender">
								{(field) => (
									<field.SelectField
										label="Select Gender"
										listChoice={genderOptions}
									/>
								)}
							</form.AppField>

							<div className="flex">
								<form.AppField name="address.city">
									{(field) => (
										<field.TextField label="city" placeholder="city" />
									)}
								</form.AppField>

								<form.AppField name="address.state">
									{(field) => (
										<field.TextField label="state" placeholder="state" />
									)}
								</form.AppField>

								<form.AppField name="address.zipcode">
									{(field) => <field.NumberField label="ZipCode" />}
								</form.AppField>
							</div>
						</div>

						<button onClick={nextStep} className="bg-blue-300 w-1/5">
							Next
						</button>
					</>
				)}
			</form>
		</div>
	);
}

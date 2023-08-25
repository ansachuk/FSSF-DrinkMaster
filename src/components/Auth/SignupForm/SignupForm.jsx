import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { titleSignup, form, label } from "./SignupForm.module.scss";

export default function SignupForm() {
	return (
		<div>
			<h2 className={titleSignup}>Registration</h2>
			<Formik
			// initialValues={{ name: "", email: "" password:'' }}
			// onSubmit={async values => {
			// 	await new Promise(resolve => setTimeout(resolve, 500));
			// 	alert(JSON.stringify(values, null, 2));
			// }}
			>
				<Form className={form}>
					<Field
						className={label}
						name="name"
						type="text"
						placeholder="Name"
					/>
					<Field
						className={label}
						name="email"
						type="email"
						placeholder="Email"
					/>
					<Field
						className={label}
						name="password"
						type="password"
						placeholder="Password"
					/>
					<button type="submit">Sign Up</button>
				</Form>
			</Formik>
		</div>
	);
}

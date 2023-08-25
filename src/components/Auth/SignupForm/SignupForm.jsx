import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { titleSignup, form, label, btnSignup, linkSignUp } from "./SignupForm.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { register } from "redux/auth/authOperations";

export default function SignupForm() {
	const dispatch = useDispatch();

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	const form = e.currentTarget;
	// 	dispatch(
	// 		register({
	// 			name: form.elements.name.value,
	// 			email: form.elements.email.value,
	// 			password: form.elements.password.value,
	// 		}),
	// 	);
	// 	form.reset();
	// };
	return (
		<div>
			<h2 className={titleSignup}>Registration</h2>
			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				// onSubmit={handleSubmit}
			>
				<Form className={form}>
					<Field
						className={label}
						name="name"
						type="text"
						placeholder="Name"
						required
					/>
					<Field
						className={label}
						name="email"
						type="email"
						placeholder="Email"
						required
					/>
					<Field
						className={label}
						name="password"
						type="password"
						placeholder="Password"
						required
					/>
					<button
						className={btnSignup}
						type="submit"
					>
						Sign Up
					</button>
					<NavLink
						className={linkSignUp}
						to="signin"
					>
						Sign In
					</NavLink>
				</Form>
			</Formik>
		</div>
	);
}

import React from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import { titleSignup, form, label, btnSignup, linkSignUp } from "../SignupForm/SignupForm.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
	email: yup.string().email("Enter a valid email").required("Email is a required field"),
	password: yup
		.string()
		.required("Пароль є обовʼязковим полем")
		.min(6, "Пароль повинен містити щонайменше 6 символів")
		.max(16, "Пароль не може містити більше 16 символів")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
			"Пароль повинен містити принаймні одну літеру верхнього регістру, одну літеру нижнього регістру та одну цифру",
		),
});

export default function SigninForm() {
	const dispatch = useDispatch();

	// const handleSubmit = e => {
	// 	e.preventDefault();

	// 	const form = e.currentTarget;
	// 	dispatch(
	// 		logIn({
	// 			email: form.elements.email.value,
	// 			password: form.elements.password.value,
	// 		}),
	// 	);
	// 	form.reset();
	// };

	return (
		<div>
			<h2 className={titleSignup}>Sign In</h2>
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
					<button
						className={btnSignup}
						type="submit"
					>
						Sign In
					</button>
					<NavLink
						className={linkSignUp}
						to="signin"
					>
						Registration
					</NavLink>
				</Form>
			</Formik>
		</div>
	);
}

import React from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import { titleSignup, form, label, btnSignup, linkSignUp } from "./SignupForm.module.scss";
import { NavLink, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../../../redux/operations/authOperations";

const schema = yup.object().shape({
	name: yup.string().required(),
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

export default function SignupForm() {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			registrationThunk({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			}),
		);
		form.reset();
	};
	return (
		<div>
			<h2 className={titleSignup}>Registration</h2>
			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				validationSchema={schema}
				onSubmit={handleSubmit}
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
						autoComplete="current-password"
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

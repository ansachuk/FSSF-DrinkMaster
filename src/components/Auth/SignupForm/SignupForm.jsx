import React from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import { titleSignup, form, label, btnSignup, linkSignUp } from "./SignupForm.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/operations/authOperations";

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

	const handleSubmit = values => {
		dispatch(signup(values));
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
						autoComplete="name"
						required
					/>
					<Field
						className={label}
						name="email"
						type="email"
						placeholder="Email"
						autoComplete="email"
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
						to="/welcome//signin"
					>
						Sign In
					</NavLink>
				</Form>
			</Formik>
		</div>
	);
}

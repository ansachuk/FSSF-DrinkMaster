import { schemaSignup } from "../../../schemas/schemas";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
	container,
	titleSignup,
	form,
	label,
	btnSignup,
	linkSignUp,
	error,
} from "./SignupForm.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/operations/authOperations";

export default function SignupForm() {
	const dispatch = useDispatch();

	const handleSubmit = values => {
		dispatch(signup(values));
	};

	return (
		<div className={container}>
			<h2 className={titleSignup}>Registration</h2>
			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				validationSchema={schemaSignup}
				onSubmit={handleSubmit}
			>
				<Form className={form}>
					<Field
						className={label}
						name="name"
						type="text"
						placeholder="Name"
						autoComplete="off"
						required
					/>
					<Field
						className={label}
						name="email"
						type="email"
						placeholder="Email"
						autoComplete="off"
						required
					/>
					<ErrorMessage
						className={error}
						name="email"
						component="div"
					/>
					<Field
						className={label}
						name="password"
						type="password"
						placeholder="Password"
						autoComplete="off"
						required
					/>
					<ErrorMessage
						className={error}
						name="password"
						component="div"
					/>
					<button
						className={btnSignup}
						type="submit"
					>
						Sign Up
					</button>
					<NavLink
						className={linkSignUp}
						to="/welcome/signin"
					>
						Sign In
					</NavLink>
				</Form>
			</Formik>
		</div>
	);
}

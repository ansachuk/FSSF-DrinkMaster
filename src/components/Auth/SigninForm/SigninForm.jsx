import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import {
	container,
	titleSignup,
	form,
	label,
	btnSignup,
	linkSignUp,
	error,
} from "../SignupForm/SignupForm.module.scss";
import { schemaSignin } from "../../../schemas/schemas";
import { login } from "../../../redux/operations/authOperations";

export default function SigninForm() {
	const dispatch = useDispatch();

	const handleSubmit = values => {
		dispatch(login(values));
	};

	return (
		<div className={container}>
			<h2 className={titleSignup}>Sign In</h2>
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={handleSubmit}
				validationSchema={schemaSignin}
			>
				<Form className={form}>
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
						Sign In
					</button>
					<NavLink
						className={linkSignUp}
						to="/welcome/signup"
					>
						Registration
					</NavLink>
				</Form>
			</Formik>
		</div>
	);
}

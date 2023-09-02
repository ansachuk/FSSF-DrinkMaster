import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { subscribe } from "../../../../redux/operations/authOperations";
import scss from "./EmailSubscription.module.scss";

const SubscribeForm = () => {
	const dispatch = useDispatch();

	const [isConfirmed, setIsConfirmed] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [status, setStatus] = useState("");

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await dispatch(subscribe(values));
			setIsConfirmed(true);
			setStatus("success");
			resetForm();
		} catch (error) {
			setStatus("error");
		} finally {
			setSubmitting(false);
		}
	};

	useEffect(() => {
		if (isConfirmed) {
			const timer = setTimeout(() => {
				setIsConfirmed(false);
				setStatus("");
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [isConfirmed]);

	return (
		<Formik
			initialValues={{ email: "" }}
			onSubmit={handleSubmit}
			validate={values => {
				const errors = {};

				if (!values.email) {
					return errors;
				}

				if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = "Invalid email address.";
				}

				return errors;
			}}
		>
			{({ isSubmitting, errors, values }) => (
				<Form className={scss.subscribe_form}>
					<p className={scss.subscribe_text}>
						Subscribe to our newsletter and stay in touch with the latest news and special offers.
					</p>
					<div className={scss.input_container}>
						<Field
							type="email"
							name="email"
							placeholder="Enter your email"
							className={`${scss.subscribe_input} ${
								isFocused
									? values.email
										? errors.email
											? scss.invalid_border
											: scss.valid_border
										: ""
									: ""
							}`}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>

						{errors.email && isFocused && (
							<div className={scss.error_message_on_border}>{errors.email}</div>
						)}
					</div>

					<div className={scss.subscribe_status_container}>
						{status === "success" && isConfirmed && (
							<p
								className={`${scss.success_message} ${scss.status_message} ${scss.success_status}`}
							>
								You have successfully subscribed to the newsletter
							</p>
						)}

						{status === "error" && (
							<p className={`${scss.error_message} ${scss.status_message} ${scss.error_status}`}>
								Oops! An error occurred. Please try again later.
							</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isSubmitting || !values.email || Object.keys(errors).length > 0}
						className={scss.subscribe_button}
					>
						{isSubmitting ? "Subscribing..." : "Subscribe"}
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default SubscribeForm;

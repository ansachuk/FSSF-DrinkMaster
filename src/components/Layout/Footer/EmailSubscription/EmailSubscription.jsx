import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { subscribe } from "../../../../redux/operations/authOperations";
import scss from "./EmailSubscription.module.scss";

const SubscribeForm = () => {
	// Получаем метод dispatch из redux
	const dispatch = useDispatch();
	// Локальные состояния
	const [isConfirmed, setIsConfirmed] = useState(false); // Для отслеживания подтверждения подписки
	const [isFocused, setIsFocused] = useState(false); // Для отслеживания фокуса на поле ввода

	// Обработчики фокуса и размытия
	const handleFocus = () => {
		setIsFocused(true); // Поле в фокусе
	};

	const handleBlur = () => {
		setIsFocused(false); // Поле не в фокусе
	};

	// Обработчик отправки формы
	const handleSubmit = async (values, { setSubmitting, setStatus }) => {
		try {
			// Отправляем запрос на подписку и ждем завершения
			await dispatch(subscribe(values));
			setIsConfirmed(true); // Подписка успешно подтверждена
			setStatus("success"); // Устанавливаем статус успеха
		} catch (error) {
			setStatus("error"); // Устанавливаем статус ошибки
		} finally {
			setSubmitting(false); // Завершаем процесс отправки формы
		}
	};

	// Эффект для очистки подтверждения подписки
	useEffect(() => {
		if (isConfirmed) {
			const timer = setTimeout(() => {
				setIsConfirmed(false); // Сбрасываем подтверждение подписки
			}, 3000);

			return () => {
				clearTimeout(timer); // Очищаем таймер при размонтировании
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
					return errors; // Возвращаем пустой объект ошибок, если поле пустое
				}

				if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = "Invalid email address."; // Устанавливаем сообщение об ошибке для некорректного email
				}

				return errors; // Возвращаем объект с ошибками (или пустой, если ошибок нет)
			}}
		>
			{({ isSubmitting, status, errors, values }) => (
				<Form className={scss.subscribe_form}>
					<p className={scss.subscribe_text}>
						Subscribe to our newsletter and stay in touch with the latest news and special offers.
					</p>
					<div className={scss.input_container}>
						<Field
							type="email"
							name="email"
							placeholder="Enter your email"
							// Применяем классы в зависимости от фокуса, наличия значения и ошибок
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
						{/* Показываем сообщение об ошибке, если есть ошибка и поле в фокусе */}
						{errors.email && isFocused && (
							<div className={scss.error_message_on_border}>{errors.email}</div>
						)}
					</div>

					<div className={scss.subscribe_status_container}>
						{/* Отображаем сообщение об успехе, если статус "success" и подписка подтверждена */}
						{status === "success" && isConfirmed && (
							<p
								className={`${scss.success_message} ${scss.status_message} ${scss.success_status}`}
							>
								You have successfully subscribed to the newsletter
							</p>
						)}

						{/* Отображаем сообщение об ошибке, если статус "error" */}
						{status === "error" && (
							<p className={`${scss.error_message} ${scss.status_message} ${scss.error_status}`}>
								Oops! An error occurred. Please try again later.
							</p>
						)}
					</div>
					{/* Кнопка отправки формы */}
					<button
						type="submit"
						// Отключаем кнопку, если отправка уже идет, поле пустое или есть ошибки
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

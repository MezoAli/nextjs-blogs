import classes from "./contact-form.module.css";
import { useRef, useState, useEffect } from "react";
import Notification from "../ui/notification";
async function sendData(contactetails) {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactetails),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "something went wrong");
	}
}

function ContactForm() {
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();
	const [messageStatus, setMessageStatus] = useState();

	useEffect(() => {
		if (messageStatus === "error" || messageStatus === "success") {
			const timer = setTimeout(() => {
				setMessageStatus("");
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [messageStatus]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const enteredEmail = emailRef.current.value;
		const enteredName = nameRef.current.value;
		const enteredMessage = messageRef.current.value;
		setMessageStatus("pending");

		try {
			await sendData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});
			setMessageStatus("success");
		} catch (error) {
			setMessageStatus("error");
			return;
		}
	};

	let notifications;

	if (messageStatus === "pending") {
		notifications = {
			status: "pending",
			message: "sending message...",
			title: "pending",
		};
	}
	if (messageStatus === "success") {
		notifications = {
			status: "success",
			message: "message stored",
			title: "success",
		};
	}
	if (messageStatus === "error") {
		notifications = {
			status: "error",
			message: "something went wrong...",
			title: "error",
		};
	}
	return (
		<section className={classes.contact}>
			<h1>How Can I Help You</h1>
			<form className={classes.form} onSubmit={handleSubmit}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input type="email" id="email" required ref={emailRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id="name" required ref={nameRef} />
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Email</label>
					<textarea id="message" rows="5" required ref={messageRef}></textarea>
				</div>
				<div className={classes.control}>
					<button type="submit">Send Message</button>
				</div>
			</form>
			{notifications && (
				<Notification
					title={notifications.title}
					status={notifications.status}
					message={notifications.message}
				/>
			)}
		</section>
	);
}

export default ContactForm;

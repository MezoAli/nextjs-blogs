import classes from "./contact-form.module.css";
import { useRef } from "react";
function ContactForm() {
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const enteredEmail = emailRef.current.value;
		const enteredName = nameRef.current.value;
		const enteredMessage = messageRef.current.value;

		const response = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();
	};
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
		</section>
	);
}

export default ContactForm;

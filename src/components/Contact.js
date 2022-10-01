import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Votre message a été envoyé avec success");
		navigate("/");
	};
	return (
		<div className="row">
			<div className="col-md-6 mx-auto">
				<h1>Contactez-nous</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group mb-3">
						<label htmlFor="email">Email</label>
						<input type="text" id="message" className="form-control" />
					</div>
					<div className="form-group mb-3">
						<label htmlFor="message">Message</label>
						<textarea id="message" className="form-control" />
					</div>
					<div className="form-group">
						<button className="btn-success btn">Envoyer</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;

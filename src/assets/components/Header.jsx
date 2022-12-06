import { useState } from "react";

const Header = (props) => {
	// const [contactList, setContactList] = useState([]);
	const [newContact, setNewContact] = useState({
		fullName: "",
		contactNumber: "",
		email: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setNewContact((prevDetails) => {
			return {
				...prevDetails,
				[name]: value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.setContactList((prevContact) => {
			return [newContact, ...prevContact];
		});
		setNewContact({ fullName: "", contactNumber: "", email: "" });
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<h3>Enter Contact Details</h3>
			<label htmlFor="fullName" className="form-label">
				Full Name
			</label>
			<input
				type="text"
				onChange={handleChange}
				required
				autoComplete="off"
				placeholder="Enter Full Name"
				id="fullName"
				value={newContact.fullName}
				name="fullName"
			/>
			<label htmlFor="contactNumber" className="form-label">
				Contact Number
			</label>
			<input
				type="tel"
				onChange={handleChange}
				required
				autoComplete="off"
				placeholder="Enter Contact Number"
				id="contactNumber"
				value={newContact.contactNumber}
				name="contactNumber"
			/>
			<label htmlFor="email" className="form-label">
				Email
			</label>
			<input
				type="text"
				onChange={handleChange}
				required
				autoComplete="off"
				placeholder="Enter Email Address"
				id="email"
				value={newContact.email}
				name="email"
			/>
			<button className="submit-btn" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Header;

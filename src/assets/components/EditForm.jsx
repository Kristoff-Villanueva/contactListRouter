import { useState } from "react";

const EditForm = (props) => {
	function handleChange(e) {
		const { name, value } = e.target;
		props.setEditContact((prevDetails) => {
			return {
				...prevDetails,
				[name]: value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.setContactList((prevContact) => {
			return [props.newContact, ...prevContact];
		});

		const newArr = [...props.contactList];
		newArr[props.editIndex] = props.editContact;
		props.setContactList(newArr);

		props.setEditContact({ fullName: "", contactNumber: "", email: "" });
		props.setEditing(false);
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<h3>Edit Contact Details</h3>
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
				value={props.editContact.fullName}
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
				value={props.editContact.contactNumber}
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
				value={props.editContact.email}
				name="email"
			/>
			<div className="btn-div">
				<button className="edit-btn" type="submit">
					Save Changes
				</button>
				<button className="cancel-btn" onClick={() => props.setEditing(false)}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default EditForm;

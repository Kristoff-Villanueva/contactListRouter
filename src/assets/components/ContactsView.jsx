import React from "react";

const ContactsView = (props) => {
	const contactsArr = props.contactList;
	const contactElements = contactsArr.map((el) => {
		return (
			<div key={el.contactNumber}>
				<div className="table" key={el.contactNumber}>
					<p className="firstLink">{el.fullName}</p>
					<p className="secondLink">{el.contactNumber}</p>
					<p className="thirdLink">{el.fullName}</p>
					<p>
						<span className="action-icon">📝</span>
						<span className="action-icon">❌</span>
					</p>
				</div>
				<hr />
			</div>
		);
	});

	return (
		<div className="contacts-view">
			<h3>All Contacts</h3>
			<div className="table">
				<h4 className="firstLink">Full Name</h4>
				<h4 className="secondLink">Contact Number</h4>
				<h4 className="thirdLink">Email</h4>
				<h4 className="fourthLink">Actions</h4>
			</div>
			{contactElements}
		</div>
	);
};

export default ContactsView;

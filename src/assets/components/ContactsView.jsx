import React from "react";

const ContactsView = (props) => {
	const contactsArr = props.contactList;

	function handleDelete(e) {
		const deleteEl = e.target.id;
		const newContactsArr = [...contactsArr];
		newContactsArr.splice(deleteEl, 1);
		props.setContactList(newContactsArr);
	}

	function handleEdit(e) {
		const editEl = e.target.id.slice(5);
		props.setEditContact(contactsArr[editEl]);
		props.setEditing((prevState) => !prevState);
		props.setEditIndex(editEl);
	}

	const contactElements = contactsArr.map((el) => {
		return (
			<div key={el.contactNumber}>
				<div className="table" key={el.contactNumber}>
					<p className="zeroLink">{contactsArr.indexOf(el) + 1}</p>
					<p className="firstLink">{el.fullName}</p>
					<p className="secondLink">{el.contactNumber}</p>
					<p className="thirdLink">{el.email}</p>
					<p>
						<span
							id={`edit-${contactsArr.indexOf(el)}`}
							onClick={handleEdit}
							className="action-icon"
						>
							📝
						</span>
						<span
							id={contactsArr.indexOf(el)}
							onClick={handleDelete}
							className="action-icon"
						>
							❌
						</span>
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
				<h4 className="zeroLink">Id</h4>
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

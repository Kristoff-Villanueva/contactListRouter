import { useState, useRef } from "react";
import Header from "./assets/components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactsView from "./assets/components/ContactsView";
import EditForm from "./assets/components/EditForm";

function App() {
	const [contactList, setContactList] = useState([
		{ fullName: "Kris", contactNumber: "0916271840", email: "kris@gmail.com" },
		{ fullName: "Sai", contactNumber: "111222", email: "sai@gmail.com" },
		{ fullName: "Mig", contactNumber: "09456", email: "mig@gmail.com" },
		{ fullName: "Che", contactNumber: "02130", email: "che@gmail.com" },
	]);

	const [newContact, setNewContact] = useState({
		fullName: "",
		contactNumber: "",
		email: "",
	});

	const [editing, setEditing] = useState(false);
	const [editContact, setEditContact] = useState({
		fullName: "",
		contactNumber: "",
		email: "",
	});
	const [editIndex, setEditIndex] = useState();

	return (
		<div className="App">
			<div className="header">
				<img src="src\assets\images\contact.png" alt="" className="logo" />
				<div className="titleBar">
					<h1>Contact List</h1>
					<p>A CRUD-app using ReactJS</p>
				</div>
			</div>
			<hr />
			<div className="comps">
				{editing ? (
					<EditForm
						editContact={editContact}
						contactList={contactList}
						setContactList={setContactList}
						editIndex={editIndex}
						setEditContact={setEditContact}
						setEditing={setEditing}
					/>
				) : (
					<Header
						newContact={newContact}
						setNewContact={setNewContact}
						setContactList={setContactList}
					/>
				)}
				<ContactsView
					setEditing={setEditing}
					setContactList={setContactList}
					contactList={contactList}
					setEditContact={setEditContact}
					setEditIndex={setEditIndex}
				/>
			</div>
		</div>
	);
}

export default App;

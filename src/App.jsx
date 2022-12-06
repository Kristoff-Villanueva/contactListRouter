import { useState } from "react";
import Header from "./assets/components/Header";
import "./App.css";
import ContactsView from "./assets/components/ContactsView";

function App() {
	const [contactList, setContactList] = useState([
		{ fullName: "Kris", contactNumber: "0916271840", email: "kris@gmail.com" },
		{ fullName: "Sai", contactNumber: "111222", email: "sai@gmail.com" },
		{ fullName: "Mig", contactNumber: "09456", email: "mig@gmail.com" },
		{ fullName: "Che", contactNumber: "02130", email: "che@gmail.com" },
	]);

	return (
		<div className="App">
			<div className="titleBar">
				<h1>Contact List</h1>
				<p>A CRUD-app using ReactJS</p>
			</div>
			<hr />
			<div className="comps">
				<Header setContactList={setContactList} />
				<ContactsView
					setContactList={setContactList}
					contactList={contactList}
				/>
			</div>
		</div>
	);
}

export default App;

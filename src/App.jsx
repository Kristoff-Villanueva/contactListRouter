import { useState } from "react";
import Header from "./assets/components/Header";
import "./App.css";
import ContactsView from "./assets/components/ContactsView";

function App() {
	const [contactList, setContactList] = useState([]);

	return (
		<div className="App">
			<div className="titleBar">
				<h1>Contact List</h1>
				<p>A CRUD-app using ReactJS</p>
			</div>
			<hr />
			<div className="comps">
				<Header setContactList={setContactList} />
				<ContactsView contactList={contactList} />
			</div>
		</div>
	);
}

export default App;

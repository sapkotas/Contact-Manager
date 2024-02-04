import React, { useState } from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";

const App = () => {
  const getContact = JSON.parse(localStorage.getItem("contact"));
  const [contacts, setContact] = useState(getContact ? getContact : []);

  const addContactList = (ContactList) => {
    const allContact = [ContactList, ...contacts];
    setContact(allContact);
    localStorage.setItem("contact", JSON.stringify(allContact));
  };
  const clearAllContact = () => {
    localStorage.clear();
    setContact([]);
  };
  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactList={addContactList} />
      </div>
      <div className="contact_list">
        <h3>Contact List:</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}
        <button onClick={clearAllContact} style={{ background: "#cc0800" }}>
          {" "}
          Remove all contacts
        </button>
      </div>
    </>
  );
};
export default App;

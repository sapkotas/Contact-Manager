import React from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";

const App = () => {
  const contacts = [
    {
      name: "Sunav Sapkota",
      number: 73938226,
      loaction: "Kathmandu",
    },
    {
      name: "Subham Dahal",
      number: 73733626,
      loaction: "Matidevi",
    },
    {
      name: "Rahul Dev",
      number: 736292226,
      loaction: "Kathmandu",
    },
  ];
  const addContactList = (ContactList) => {
    contacts.push(ContactList);
    console.log(contacts);
  };
  return (
    <>
      <div className="contact_adder">
        <ContactAdder onContactList={addContactList} />
      </div>
      <div className="contact_list">
        <h3>Contact list</h3>
        {contacts.map((data) => (
          <Contact data={data}></Contact>
        ))}
      </div>
    </>
  );
};
export default App;
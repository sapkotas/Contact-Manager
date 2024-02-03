import { useState } from "react";

const ContactAdder = (list) => {
  const [name, setName] = useState("");

  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const onClickHandler = () => {
    const ContactList = { name: name, number: mobile, location: location };
    list.onContactList(ContactList);
  };

  return (
    <>
      <div className="simpleAdder">
        Contact adder:
        <br />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(abc) => setName(abc.target.value)}
        ></input>
        <input
          type="number"
          value={mobile}
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        ></input>
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <br />
        <button onClick={onClickHandler}>click me </button>
        {/*Nothing happens because we havent kept anything on buttonClick Handler*/}
      </div>
    </>
  );
};
export default ContactAdder;

import { useState } from "react";

const ContactAdder = (list) => {
  const [Name, setName] = useState("");
  // name is a state and setName is variable
  const [Mobile, setMobile] = useState("");
  const [Location, setLocation] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault(); // this prevents the relaoding of page on submit
    const ContactList = {
      id: Math.random(),
      name: Name,
      number: Mobile,
      location: Location,
    };
    if (Name.length <= 1 || Mobile.length <= 1 || Location.length <= 1) {
      alert("Please enter a valid information");
    } else {
      list.onContactList(ContactList);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <form onSubmit={onFormSubmit}>
          <h3>Contact adder:</h3>
          <br />
          <input
            type="text"
            value={Name}
            placeholder="Contact Name"
            onChange={(abc) => setName(abc.target.value)}
            // name matrai vayo vane value change hudeina state mai basxa (eslai controlled input ni bhanxa)so testo nahos vanera Onchange rakxum
            // onChange le euta function banauxa setName le ko value state lai hatauxa ra "value" chai name ma gayera basxa.
          ></input>
          <input
            type="number"
            value={Mobile}
            placeholder="Mobile number"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="text"
            value={Location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <br />
          <button>Add Contact</button>
          {/*Nothing happens because we havent kept anything on buttonClick Handler*/}
        </form>
      </div>
    </>
  );
};
export default ContactAdder;

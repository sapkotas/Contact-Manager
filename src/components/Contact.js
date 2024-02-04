const Contact = (list) => {
  return (
    <>
      <div className="contact">
        {list.data.name}
        <br />
        {list.data.number}
        <br />
        {list.data.location}
        <br />
      </div>
    </>
  );
};
export default Contact;

  
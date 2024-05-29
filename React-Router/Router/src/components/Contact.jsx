import { useNavigate } from "react-router-dom";
const Contact = () => {
  const gotoPage = useNavigate();
  const gotoContact = () => {
    gotoPage("/contact");
  };
  const gotoPrevious = () => {
    gotoPage(-1);
  };
  return (
    <>
      <section>
        <h2 className="font-bold text-2xl flex justify-center items-center p-4">
          Contact
        </h2>
        <button onClick={gotoContact}>Next-Page</button>
        <button onClick={gotoPrevious}>Previous-Page</button>
      </section>
    </>
  );
};

export default Contact;

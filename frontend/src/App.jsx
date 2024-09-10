import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return <ContactList contacts={contacts} />;
}

export default App;

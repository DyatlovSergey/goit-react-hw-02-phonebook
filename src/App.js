import React from "react";
import Phonebook from "./Components/Phonebook";
import AddContacts from "./Components/AddContacts";
import shortid from "shortid";
// import Filter from "./Components/Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (name, number) => {
    console.log(name, number);

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  nameInputId = shortid.generate();

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { contacts, filter } = this.state;
     const totalContacts = contacts.length;
    return (
      <div>
         <p>Всего contact: {totalContacts}</p>
        <h1>Phonebook</h1>
        <AddContacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter value={filter} onChange={this.changeFilter} /> */}
        <label>
          FILTER BY NAME{" "}
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>
        <Phonebook contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;

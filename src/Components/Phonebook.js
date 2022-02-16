import React from "react";
import s from "./Phonebook.module.css";
// class Phonebook extends React.Component {
//   // state = {
//   //   contacts: [],
//   //   name: "",
//   // };

//   //   handleSubmit = (evt) => {
//   //     evt.preventDefault();
//   //     const form = evt.currentTarget;
//   //     const name = form.elements.name.value;

//   //     console.log(name);
//   // this.props.onSubmit({ name });
//   // form.reset();
//   //   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <h1>Phonebook</h1>
//           <h2>Name</h2>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <button type="submit">Add contact</button>
//         </form>
//         <h1>Contacts</h1>
//         <ul>
//           <li>test</li>
//         </ul>
//       </div>
//     );
//   }
// }

const Phonebook = ({ contacts, onDeleteContact }) => (
  <ul className={s.phonebookList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}
          {number}
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </p>
      </li>
    ))}
  </ul>
);
export default Phonebook;

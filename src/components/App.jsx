import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, Section } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import data from './data.json';
// import {
//   //   //   // Container,
//   //   //   // Section,
//   ContactForm,
//   //   ContactList,
//   //   //   // Filter,
//   //   //   // Heading,
// } from 'components';

export class App extends React.Component {
  state = {
    contacts: data,
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    // const normalizedQuery = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return filteredContacts;
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm onAddContact={this.handleAddContact} />
        </Section>{' '}
        <Section>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </Container>
    );
  }
}

// const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Container>
//         <ContactList></ContactList>
//         React homework template11
//         {/* <ContactList></ContactList> */}
//       </Container>
//     </div>
//   );
// };

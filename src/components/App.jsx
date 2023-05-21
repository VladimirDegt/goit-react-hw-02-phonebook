import { Component } from "react"
import { nanoid } from 'nanoid'
import AddContactsForm from "./AddContactsForm";
import Contacts from "./Contacts";

export class App extends Component {
  state = {
    contacts: [],
  };

  createContact(data){
    const newContact = {
      ...data,
      id: nanoid(),
    }
    this.addContact(newContact)
  };

  addContact(newContact){
    this.setState((prevState)=>{
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }

  render() {
    return <>

    <AddContactsForm createContact={(data)=>this.createContact(data)}/>
    <Contacts contacts={this.state.contacts}/>
    </>;
  };
};

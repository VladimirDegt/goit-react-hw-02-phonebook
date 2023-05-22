import { nanoid } from 'nanoid'
import { Component } from "react";
import { Section, ContactsList, ItemList } from './Contacts.styled';

const inputFindId = nanoid();

class Contacts extends Component {

  state = {
    find: '',
  }

  handleInputChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  findContact (){
    return this.props.contacts.filter((item) => 
      item.name.toLowerCase().includes(this.state.find.toLowerCase())
    )
  }

  render() {
    return  <Section>
            <h2>Contacts</h2>
            <label htmlFor={inputFindId}>Find contacts by name</label>
            <input
              id = {inputFindId}
              type="text"
              name="find"
              required
              onChange={this.handleInputChange}
              value={this.state.find}
            />
            <ContactsList> {this.state.find &&
              this.findContact().map((item)=>{
              return (
                <ItemList key={item.id}>
                  <span>{item.name}: {item.number}</span>
                  <button 
                    type="button"
                    onClick={()=>this.props.onDeleteContact(item.id)}
                    >delete
                  </button>
                </ItemList>
              ) 
              })}
            </ContactsList>
            </Section>
  }  
};

export default Contacts;

import { nanoid } from 'nanoid'
import { Component } from "react";

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
    return  <section>
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
            <ul> {this.state.find &&
              this.findContact().map((item)=>{
              return (
                <li key={item.id}>
                  {item.name}: {item.number}
                </li>
              ) 
              })}
            </ul>
            </section>
  }  
};

export default Contacts;

import React, { Component } from 'react';
import ItemInfoList from './components/ItemInfoList';
import TrackerForm from './components/TrackerForm';

class App extends Component {
  id = 1
  state = {
    information:[
      {
        id: 0, 
        name: 'poptart', 
        quantity: '3',
        price: '4.29',
        purchased_date: '04302020'
      }
    ],
    keyword:''
  }

  handleChange =(e)=>{
    this.setState({
      keyword: e.target.value,
    });
  }

  handleCreate=(data) =>{
    const {information} = this.state;
    this.setState({
      information:information.concat({id:this.id++, ...data})
    })
  }

  handleRemove =(id) =>{
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) =>{
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ?{...info, ...data}
        :info
      )
    })
  }

  render(){
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return(
      <div>
        <TrackerForm
        onCreate={this.handleCreate}
        />
        <p>
          <input
          placeholder="What are you trying to look up?"
          onChange={this.handleChange}
          value={keyword}
          />
        </p>
        <hr />
        <ItemInfoList
        data={filteredList}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
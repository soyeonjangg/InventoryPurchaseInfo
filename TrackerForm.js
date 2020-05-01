import React, { Component } from 'react';

class TrackerForm extends Component {
    state = {
        name:'',
        quantity: '',
        price:'',
        purchased_date:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            quantity: '',
            price: '',
            purchased_date: ''
        })
    }

    render() {
        return ( 
            <form 
            onSubmit = {this.handleSubmit }>
            <input 
            placeholder = "Name"
            value = {this.state.name}
            onChange = {this.handleChange}
            name = "name" 
            />
            <input 
            placeholder = "Quantity"
            value = {this.state.quantity}
            onChange = {this.handleChange}
            name = "quantity" 
            />
            <input
            placeholder = "Price"
            value = { this.state.price }
            onChange = { this.handleChange }
            name = "price" 
            />
            <input 
            placeholder = "Date"
            value = {this.state.purchased_date}
            onChange = {this.handleChange}
            name = "purchased_date" 
            />
            <button type = "submit">Submit</button> 
            </form>
        );
    }
}

export default TrackerForm;
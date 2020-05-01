import React, { Component } from 'react';

class ItemInfo extends Component {
    static defaultProps = {
        info: {
            id: 0,
            name: '',
            quantity: '',
            price: '',
            purchased_date: ''
        },
    }

    state = {
        editing: false,
        name:'',
        quantity:'',
        price:'',
        purchased_date:'',
    }

    handleRemove = () => {
        //when remove button is clicked, we input id to onRemove and call
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                quantity: info.quantity,
                price: info.price,
                purchased_date: info.purchased_date
            })
        }

        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                quantity: this.state.quantity,
                price: this.state.price,
                purchased_date: this.state.purchased_date
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        return true;
    }

    render() {
        console.log('render ItemInfo' + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {editing} = this.state;

        if (editing) {
            return ( 
                <div style ={style}>
                <div>
                <input
                value = { this.state.name }
                name = "name"
                placeholder = "Name"
                onChange = { this.handleChange }
                />                     
                </div> 
                <div>
                <input
                value = {this.state.quantity }
                name = "quantity"
                placeholder = "Quantity"
                onChange = {this.handleChange }
                /> 
                </div> 
                <div>
                <input
                value = {this.state.price }
                name = "price"
                placeholder = "Price"
                onChange = {this.handleChange }
                /> 
                </div> 
                <div>
                <input
                value = {this.state.purchased_date }
                name = "purchased_date"
                placeholder = "Purchased Date"
                onChange = {this.handleChange }
                /> 
                </div> 
                <button onClick = {this.handleToggleEdit}>Apply Change</button> 
                <button onClick = {this.handleRemove} >Remove</button> 
                </div>
            );
        }

        //not editing mode
        const {
            name,
            quantity,
            price,
            purchased_date,
        } = this.props.info;

        return ( 
            <div style = {style}>
            <div><b> {name} </b></div>
            <div><b>{quantity} </b></div>
            <div><b>{price} </b></div>
            <div><b>{purchased_date} </b></div >
            <button onClick = { this.handleToggleEdit }>Edit</button> 
            <button onClick = { this.handleRemove } >Delete</button> 
            </div>
        );
    }
}

export default ItemInfo;

import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

const API_URL = process.env.REACT_APP_API_URL

export default class NewListerForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            items: [''],
            owned: false
        }
    }

    handleAddItem = () => {
        const newItems = this.state.items.map(x => x)
        newItems.push('')
        this.setState({items: newItems})
    }

    handleRemoveItem = (index) => {
        const newItems = this.state.items.map(x => x)
        newItems.splice(index, 1)
        this.setState({items: newItems})
    }

    handleSelectItem = (value, index) => {
        const newItems = this.state.items.map(x => x)
        newItems[index] = value
        this.setState({items: newItems})
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${API_URL}listers`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.refresh)
        .then(() => this.setState({
            user: '',
            items: [''],
            owned: false
        }))
    }

    render() {

        const displayItems = this.state.items.map((item, index) => {
            return (
                <div className='option-form' key={index}>
                <input name='item'
                placeholder='Enter To Do Item'
                onChange={({target}) => this.handleSelectItem(target.value, index)}
                value={this.state.items[index]} />
                <Button variant='danger'
                onClick={() => this.handleRemoveItem(index)}>
                    X
                </Button>
                </div>
            )
        })

        return (
            <form id='create' onSubmit={this.handleSubmit}>

                <input name='name' 
                    value={this.state.name}
                    type='text'
                    onChange={this.handleChange}
                    placeholder='Name of Game' 
                />
                {displayItems}
                <Button onClick={this.handleAddItem}>
                    Add List Item
                </Button>
                <Button variant='success' type='submit'>Add List</Button>
            </form>
        )
    }
}
import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            imageURL:"",
            productName: "",
            price: ""
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm = (e) => {
        e.preventDefault(
            axios.post('/api/Form', {
                imageURL: this.state.imageURL,
                productName:this.state.productName,
                price: this.state.price
            })
        )
    }

    clearForm = (e) => {
        this.setState = {
            imageURL:"",
            productName: "",
            price: ""
        }
    }

    render() {
        return (
            <div>
                
            <div>Form</div>
            <h1>Image URL</h1>

            <form onSubmit={this.handleForm}>
                
            <input
            name='imageURL'
            onChange={this.handleUpdateInput}
            />
            <h1>Product Name</h1>
            <input
            name='productName'
            onChange={this.handleUpdateInput}
            />
            <h1>Price</h1>
            <input
            name='price'
            onChange={this.handleUpdateInput}
            />
            <button>Cancel</button>
            <button onClick={this.clearForm}>Add to Inventory</button>
            </form>
            </div>
            

            
        )
    }
}

export default Form

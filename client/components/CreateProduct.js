import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {addAProduct} from '../store/product'

class CreateProduct extends React.Component {
  constructor() {
    super()
    this.stat  = {
        category: '',
        name: '',
        description: '',
        price: '',
        stock: '',
        imageURL: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.addProduct(this.state)
    this.setState({
      currentProduct: {
        category: '',
        name: '',
        description: '',
        price: '',
          stock: '',
        imageURL: ''
      }
    })
  }

  render() {
    return (
        <div>
            <h1>Add a New Product</h1>
            <Form state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch(addAProduct(product))
})

export default connect(null, mapDispatchToProps)(CreateProduct);
import React from 'react'
import ProductsList from '../products-list/products-list'

const ProductListAdmin = ({history, user}) => {
  return (
    <div>
      <button type="button" onClick={() => history.push('/admin/products/add')}>Add New Product</button>
      <ProductsList />
    </div>
  )
}

export default ProductListAdmin;

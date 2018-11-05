import React from 'react'
import EditUserForm from './EditUserForm'
import StripeForm from './StripeForm'

const PaymentCheckout = () => {
  return (
    <div>
      <EditUserForm />
      <StripeForm />
    </div>
  )
}

export default PaymentCheckout;
import React from 'react'
import EditUserForm from '../components/cart/EditUserForm'
import {Link} from 'react-redux'
import OrderHistory from './OrderHist'

const Account = (props) => {
    console.log('Do I have access to history?', props)
    return (
      <div>
        <h1> Account Information </h1>
        <EditUserForm />
        <button type="button" onClick={() => {props.history.push('/account/order-history')}}>History</button>
      </div>
    )
}

export default Account;

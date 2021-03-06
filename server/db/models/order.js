const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    status: {
      type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed'),
      defaultValue: 'processing'
    },
    totalPrice: {
      type: Sequelize.INTEGER
    }
})


module.exports = Order;

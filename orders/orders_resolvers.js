const orderModel = require('./order_model');

module.exports={
    Query:{
        orders: ()=>{
            return orderModel.getAllOrders();
        }
    }
};
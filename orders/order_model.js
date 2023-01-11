const orders = [
    {
        date: '2012-09-08',
        subtotal: 159.66,
        items:[
           {
            product: {
                id:'redshoe',
                description: 'Old Red Shoes',
                price: 62.00,
            },
            quantity: 5,
           }
        ]
    }
];

function getAllOrders(){
    return orders;
}

module.exports={
    getAllOrders,
};
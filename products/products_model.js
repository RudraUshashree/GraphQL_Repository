const products =[
    {
        id: 'redshoe',
        description: 'Red Shoes',
        price: 42.12,
        reviews: [],
    },
    {
        id: 'greenshoe',
        description: 'Green Shoes',
        price: 95.26,
        reviews: [],
    }
];

function getAllProducts(){
    return products;
}

function getProductByPrice(){
    return products.filter((p)=>{
        return p.price >= min && p.price <= max;
    })
}

function getProductBYID(id){
    return products.find((p)=>{
        return p.id === id;
    })
}

function addingNewProduct(id,description,price){
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

function addingNewProductReview(id, rating, comment){
    const matchedProduct = getProductBYID(id);

    if(matchedProduct){
        const newProductReview = {
            rating,
            comment,
        };

        matchedProduct.reviews.push(newProductReview);

        return newProductReview;
    }
}

module.exports={
    getAllProducts,
    getProductByPrice,
    getProductBYID,
    addingNewProduct,
    addingNewProductReview,
};
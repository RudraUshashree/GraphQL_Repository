const productModel = require('./products_model');

module.exports={
    Query:{ 
        products: ()=>{
            return productModel.getAllProducts();
        },
        productByPrice: (_,args) => {
            return productModel.getProductByPrice(args.min, args.max);
        },
        productByID: (_,args)=>{
            return productModel.getProductBYID(args.id);
        }
    },
    Mutation: {
        addNewProduct:(_,args)=>{
            return productModel.addingNewProduct(args.id, args.description, args.price);
        },
        addNewProductReview:(_, args)=>{
            return productModel.addingNewProductReview(args.id, args.rating, args.comment);
        }
    }
};
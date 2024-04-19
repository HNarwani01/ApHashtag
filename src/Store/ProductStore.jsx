import { createContext, useEffect, useReducer } from "react";

export const ProductList = createContext({
    productlist:[],
    AddInitialProducts:()=>{}
})

const productListReducer=(currentValue ,action)=>{
    let newProductList =[]
    if (action.type==='INITIAL_PRODUCTS') {
        newProductList=[...action.payload]
    }
    return newProductList
}

const ProductProvider = ({ children }) => {
    const [ productlist, dispatchproductList ] = useReducer(productListReducer, [])
    const AddInitialProducts=(products)=>{
        console.log(`inside the first fn`);
        console.log(products);
        dispatchproductList({
            type:'INITIAL_PRODUCTS',
            payload:[...products]
        })
    }
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => AddInitialProducts(data.products))
    }, []);
    return <ProductList.Provider value={{
        productlist,
        AddInitialProducts
        }}>
        {children}
    </ProductList.Provider>
}
export default ProductProvider;
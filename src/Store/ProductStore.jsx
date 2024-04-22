import { createContext, useEffect, useReducer, useState } from "react";

export const ProductList = createContext({
    productlist:[],
    cartProductlist:[],
    AddInitialProducts:()=>{},
    AddTOCart:()=>{}
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
    const [cartProductlist, setcartProductlist] = useState([])
    const AddInitialProducts=(products)=>{
        dispatchproductList({
            type:'INITIAL_PRODUCTS',
            payload:[...products]
        })
    }
    const AddTOCart=(productObject)=>{
        let alreadyExist = false;
        cartProductlist.map((product)=>{
            if (product.id===productObject.id) {
                alreadyExist=true;
                product.quantity++
            }
        })
        if (!alreadyExist) {
            let newObject = {
                id:productObject.id,
                price:productObject.price,
                thumbnail:productObject.thumbnail,
                quantity:1,
                title:productObject.title,
                category:productObject.category
            }
            let tempCartList = [...cartProductlist,newObject]
            setcartProductlist([...tempCartList])
        }    
    }
    
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => AddInitialProducts(data.products))
    }, []);
    return <ProductList.Provider value={{
        productlist,
        cartProductlist,
        AddInitialProducts,
        AddTOCart
        }}>
        {children}
    </ProductList.Provider>
}
export default ProductProvider;
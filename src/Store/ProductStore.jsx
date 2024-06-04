import { createContext, useEffect, useReducer, useState } from "react";

export const ProductList = createContext({
    productlist: [],
    cartProductlist: [],
    AddInitialProducts: () => { },
    AddTOCart: () => { },
    EditCartProductList: () => { }
})

const productListReducer = (currentValue, action) => {
    let newProductList = []
    if (action.type === 'INITIAL_PRODUCTS') {
        newProductList = [...action.payload]
    }
    return newProductList
}

const ProductProvider = ({ children }) => {
    const [productlist, dispatchproductList] = useReducer(productListReducer, [])
    const [cartProductlist, setcartProductlist] = useState([])
    const AddInitialProducts = (products) => {
        dispatchproductList({
            type: 'INITIAL_PRODUCTS',
            payload: [...products]
        })
    }
    const AddTOCart = (productObject) => {
        let alreadyExist = false;
        cartProductlist.map((product) => {
            if (product.id === productObject.id) {
                alreadyExist = true;
                product.quantity++
                
            }
        })
        if (!alreadyExist) {
            let newObject = {
                id: productObject.id,
                price: productObject.price,
                thumbnail: productObject.thumbnail,
                quantity: 1,
                title: productObject.title,
                category: productObject.category
            }
            let tempCartList = [...cartProductlist, newObject]
            setcartProductlist([...tempCartList])
            
        }
    }
    

    const EditCartProductList = async (action, productObject,amount) => {
        let newProductlist =await [...cartProductlist]; 
            console.log('checking data');
            console.log(newProductlist);
            console.log(productObject.id);

        if (action === 'INCREASE_QUANTIY' || action === 'DECREASE_QUANTIY') {
            newProductlist = newProductlist.map(product => {
                console.log('this is id');
                console.log(product.id)
                if (product.id == productObject.id) {
                    console.log('setting quantity');
                    return {
                        ...product,
                        quantity: amount
                    };
                }
                return product; // Return the unchanged product if ID doesn't match
            });
        } else if (action === 'ADD_TO_CART') {
            // Add the new product to the cartProductlist
            newProductlist.push(productObject);
        } else if (action === 'REMOVE_FROM_CART') {
            // Remove the product with the specified ID from the cartProductlist
            newProductlist = newProductlist.filter(item => item.id !== productObject.id);
        }
    
        // Update the cartProductlist state
        setcartProductlist(newProductlist);
    };
    

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => AddInitialProducts(data.products))
    }, []);
    return <ProductList.Provider value={{
        productlist,
        cartProductlist,
        AddInitialProducts,
        AddTOCart,
        EditCartProductList,
    }}>
        {children}
    </ProductList.Provider>
}
export default ProductProvider;
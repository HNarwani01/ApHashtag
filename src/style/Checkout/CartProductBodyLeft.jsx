import { useContext } from "react";
import CheckoutProducts from "./CheckoutProducts.jsx";
import { ProductList } from "../store/ProductStore.jsx";

const CartProductBodyLeft=()=>{
    const {cartProductlist} = useContext(ProductList)
    console.log(cartProductlist);
return <>
             <div className="bodyLeft">
                {cartProductlist.map(cartitem=>{
                    return <CheckoutProducts cartitem={cartitem}/>
                })}
                
            </div>
        </>
}
export default CartProductBodyLeft;
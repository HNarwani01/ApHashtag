import { useContext } from "react";
import { ProductList } from "../../Store/ProductStore.jsx";
import NonEmptyCart from "./NonEmptyCart.jsx";
import EmptyCart from "./EmptyCart.jsx";

const CheckoutPage=()=>{
    const {cartProductlist} = useContext(ProductList)
    
    return <>
        {cartProductlist.length===0 ? <EmptyCart/>  : <NonEmptyCart list={cartProductlist} />}
    </>
}
export default CheckoutPage;
import { useContext } from "react";
import EmptyCart from "./EmptyCart";
import { ProductList } from "../../Store/ProductStore";
import NonEmptyCart from "./NonEmptyCart";

const CheckoutPage =()=>{
    const {cartProductlist} = useContext(ProductList)
    return <>
    {cartProductlist.length===0? <EmptyCart/>:<NonEmptyCart/>}
    </>
}
export default CheckoutPage;
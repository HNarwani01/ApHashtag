import { useContext } from "react";
import CheckoutProducts from "./CheckoutProducts";
import { ProductList } from "../../Store/ProductStore";



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

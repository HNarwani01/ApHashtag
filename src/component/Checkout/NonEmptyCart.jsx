import CartProductBodyLeft from "./CartProductBodyLeft"
import CartProductBodyRight from "./CartProductBodyRight"
import CartProductHeading from "./CartProductHeading"
import CheckoutBanner from "./CheckoutBanner"


const NonEmptyCart = ()=>{
    return <>
        <CheckoutBanner/>
        <CartProductHeading />
        <div className="mainBody">
            <CartProductBodyLeft/>
            <CartProductBodyRight/>
        </div> 
    </>
}
export default NonEmptyCart; 
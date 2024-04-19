import { MdRemoveShoppingCart } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom"
import styles from '../../style/Checkout/EmptyCart.module.css'

const EmptyCart = ()=>{
    return <>
        <div className={styles.emptyCart}>
            <div className={styles.logo}>
            <MdRemoveShoppingCart />
            </div>
            <h1>Its look like you haven't set your mind for anything yet</h1>
            <p>If you are looking for some products you can checkout our website which have some really good products and spicy deals</p>
            <Link to='/'><button className="btn btn-secondary">Shop Now <FaCartPlus /></button></Link>
        </div>
    </>
}
export default EmptyCart;
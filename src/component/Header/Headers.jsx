import styles from '../../style/Headers.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import { FaUser, FaHeart, FaShoppingCart  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HeaderPfp from './HeaderPfp';
import { useContext } from 'react';
import { ProductList } from '../../Store/ProductStore';


const Headers =()=>{
    const {cartProductlist} = useContext(ProductList)
    return <>
    <div className={styles.navTopSection}>
        <ul>
            <li>Free Return</li>
            <li>100% Privacy</li>
            <li>Cash On delivery</li>
            <li>Free shiping*</li>
        </ul>
        <div><a href="">find your fit</a></div>
    </div>
    <header className={styles.logoContainer}>
        <div className={styles.logo}>
            <Link><img src="./src/assets/brand-logo.png" alt=""/></Link>
            <p>Your Lingerir Experts. Female Owned.</p>
        </div>
        <div className={styles.searchContainer}>
            <input type="text"/>
            <i><CiSearch /></i>
        </div>
        <div className={styles.iconsContainer}>
            <i ><Link to='/profile-page'><HeaderPfp/></Link></i>
            <i ><Link to="/favorite-page"> <FaHeart /> </Link></i>
            <i ><Link to="/checkout-page"> <FaShoppingCart /></Link>
            <sup className={styles.customBadge}> {cartProductlist.length}</sup>
            </i>
        </div>
    </header>
    
    </>
}
export default Headers;
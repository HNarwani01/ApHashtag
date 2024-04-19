import { Link } from 'react-router-dom';
import styles from '../style/Navbar.module.css';
const Navbar = ()=>{
    return <>
    <div className={styles.navOuterDiv}>
        <div className={styles.navPcContainer}>
            <ul className={styles.navPc}>
                <li><Link to="">New Arrivals</Link></li>
                <li className={styles.explore}><Link to="">Explore</Link></li>
                <li><Link to="/Bra">Bra</Link></li>
                <li><Link to="">Panties</Link></li>
                <li><Link to="">Sleepwear</Link></li>
                <li><Link to="">Sportwear</Link></li>
                <li><Link to="">Shapewear</Link></li>
                <li><Link to="">Lingerie set</Link></li>
                <li><Link to="">accessories</Link></li>
                <li><Link to="">Skin & hair</Link></li>
                <li><Link to="">KidZone</Link></li>
                <li><Link to="">Mega deals</Link></li>
            </ul>
        </div>
        <div className={styles.navMobileContainer}>
            <div className={styles.navMobile}>
                <Link to="latest.html"><img src="./src/assets/nb-11.png" alt="new Arrivals"/></Link>
                <Link to="bras.html"><img src="./src/assets/nb-12.png" alt="Explore"/></Link>
                <Link to="bras.html"><img src="./src/assets/nb-2.webp" alt="Bra-image"/></Link>
                <Link to="#"><img src="./src/assets/nb-4.webp" alt="panty-image"/></Link>
                <Link to="#"><img src="./src/assets/nb-9.png" alt="night wear"/></Link>
                <Link to="#"><img src="./src/assets/nb-3.png" alt="sports wear"/></Link>
                <Link to="#"><img src="./src/assets/nb-5.webp" alt="shapewear"/></Link>
                <Link to=""><img src="./src/assets/nb-1.png" alt="lingerie"/></Link>
                <Link to="#"><img src="./src/assets/nb-6.png" alt="accessories"/></Link>
                <Link to="#"><img src="./src/assets/nb-7.png" alt="Skin & hair"/></Link>
                <Link to="#"><img src="./src/assets/nb-10.png" alt="kid zone"/></Link>
                <Link to="sale.html"><img src="./src/assets/nb-8.png" alt="mega deal" /></Link>
            </div>
        </div>
    </div>
    </>
}
export default Navbar;
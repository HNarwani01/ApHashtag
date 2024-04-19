import styles from '../style/Footer.module.css'
import { FaYoutube ,FaInstagram, FaTwitter,FaFacebook  } from "react-icons/fa";

const Footer =()=>{
    return <>
    <section className={styles.footer}>
        <div className={styles.footerTop}>
            <ul className={styles.contact}>
                <li>
                    <address>
                        <h3>Address </h3>
                    </address>
                </li>
                <li>phone <span>+315478965</span></li>
                <li>email <span>example@.com</span></li>
                <li>address <address>this is random address</address>
                </li>
            </ul>
            <ul className={styles.links}>

                <li><a href="sale.html">sale</a></li>
                <li><a href="#">page-2</a></li>
                <li><a href="#">page-3</a></li>
                <li><a href="#">page-4</a></li>
                <li><a href="#">page-5</a></li>
                <li><a href="#">page-6</a></li>
                <li><a href="#">page-7</a></li>
                <li><a href="#">page-8</a></li>
                <li><a href="#">page-9</a></li>
                <li><a href="#">page-10</a></li>
            </ul>

            <div className={styles.submitMail}>
                <p>get in touch</p>
                <input type="text"/>
                <button>Submit</button>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <ul className={styles.follow}>
                <li><a href="#" target='_blank'><FaYoutube /></a></li>
                <li><a href="#" target='_blank'><FaInstagram /></a></li>
                <li><a href="#" target='_blank'><FaTwitter /></a></li>
                <li><a href="#" target='_blank'><FaFacebook /></a></li>
            </ul>
            <div className={styles.rights}>
                © Copyright 2024 <a href="">MAADHVII</a>. All rights reserved.
            </div>

        </div>

    </section>
    </>
}
export default Footer;
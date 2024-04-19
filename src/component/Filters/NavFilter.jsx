import styles from '../../style/Filters/NavFilter.module.css'
import { FaShare } from "react-icons/fa6";

const NavFilter = () => {
    return <>
        <div className={styles.navFilterDiv}>
            <div className={styles.navFilterLeft}>
                <h5>Filters</h5>
                <select>
                    <option hidden>Size</option>
                    <option value="">32</option>
                    <option value="">34</option>
                    <option value="">36</option>
                    <option value="">38</option>
                </select>
                <select>
                    <option hidden>Brand</option>
                    <option value="">yohohohoh</option>
                    <option value="">34</option>
                    <option value="">36</option>
                    <option value="">38</option>
                </select>
                <select>
                    <option hidden>Color</option>
                    <option value="">32</option>
                    <option value="">34</option>
                    <option value="">36</option>
                    <option value="">38</option>
                </select>
                <select>
                    <option hidden>Features</option>
                    <option value="">32</option>
                    <option value="">34</option>
                    <option value="">36</option>
                    <option value="">38</option>
                </select>
                <select>
                    <option hidden>LifeStyle</option>
                    <option value="">32</option>
                    <option value="">34</option>
                    <option value="">36</option>
                    <option value="">38</option>
                </select>
            </div>
            <div className={styles.navFilterRight}>
                Share <FaShare />
            </div>
        </div>
    </>
}
export default NavFilter;

// <ul>
//                     <li>Size <IoMdArrowDropdown /></li>
//                     <li>Brand <IoMdArrowDropdown /></li>
//                     <li>Color <IoMdArrowDropdown /></li>
//                     <li>Features <IoMdArrowDropdown /></li>
//                     <li>LifeStyle <IoMdArrowDropdown /></li>
//                 </ul>
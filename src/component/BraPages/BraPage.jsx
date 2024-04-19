import NavFilter from "../Filters/NavFilter";
import SideFilter from "../Filters/SideFilter";
import styles from '../../style/BraPage/BraPage.module.css'


const BraPage =()=>{
    return <>
    <div className={styles.filterSection}>
        <SideFilter/>
        <NavFilter/>
    </div>
    </>
}
export default BraPage;
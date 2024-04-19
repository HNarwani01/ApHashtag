import styles from '../../style/SimpleCarosel/SimpleCarosel.module.css';
const SaleCaroselSlide =({itemlist})=>{
    return  <>
            {itemlist.map((item, index)=><img key={index} className={styles.slide} src={item} alt=""/>)}
    </>
}
export default SaleCaroselSlide;

{/* <img className={styles.slide} src="./src/assets/sale-1.webp" alt=""/> */}

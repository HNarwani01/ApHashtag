import styles from '../style/BottomCards.module.css';

const BottomCard =()=>{
    return <>
        <div className={styles.Cards}>
        <div className={styles.box}> <a href="#"><img src="./src/assets/card-1.webp" alt="card-images"/></a></div>
        <div className={styles.box}> <a href="#"><img src="./src/assets/card-2.webp" alt="card-images"/></a></div>
        <div className={styles.box}> <a href="#"><img src="./src/assets/card-3.webp" alt="card-images"/></a></div>
        <div className={styles.box}> <a href="#"><img src="./src/assets/card-4.webp" alt="card-images"/></a></div>
        <div className={styles.box}> <a href="#"><img src="./src/assets/card-5.webp" alt="card-images"/></a></div>
        <div className={styles.box}> <a href="#"><img src="./src/assets/card-6.webp" alt="card-images"/></a></div>
    </div>
    </>
}
export default BottomCard;
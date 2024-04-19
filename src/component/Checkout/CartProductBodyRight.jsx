import styles from '../../style/Checkout/CartProductBodyRight.module.css'
const CartProductBodyRight = () => {
    return <>
        <div className={styles.bodyRight}>
            <div className={styles.bodytotal}>
                <h4>payable amount </h4>
                <div className={`${styles.flexCenterApart} ${styles.subtotal}`}>
                    amount <span>$10</span>
                </div>
                <div className={`${styles.charges} ${styles.flexCenterApart}`}>
                    charges <span>$10</span>
                </div>
                <div className={`${styles.discount} ${styles.flexCenterApart}`}>
                    discount <span>$10</span>
                </div>

                <div className={`${styles.finalToPay} ${styles.flexCenterApart}`}>
                    amount <span>$10</span>
                </div>
                <div className={styles.payNow}>
                    <button>Pay</button>
                </div>
            </div>
        </div>
    </>
}
export default CartProductBodyRight;
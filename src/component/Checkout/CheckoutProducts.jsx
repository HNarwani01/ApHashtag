import styles from '../../style/Checkout/CheckoutProducts.module.css'
const CheckoutProducts = ({cartitem}) => {
    console.log(cartitem);
    return <>
        <div className={styles.bodyBox}>
            <div className={styles.bodyBoxLeft}>
                <img src={cartitem.thumbnail} alt="" />
            </div>
            <div className={styles.bodyBoxRight}>
                <h1>{cartitem.title}</h1>
                <h5>{cartitem.category}</h5>
                <p>{cartitem.price} </p>
                <div className={styles.quantity}>
                    <button>-</button>
                    <input type="number" min="1" value={`${cartitem.quantity}`} />
                    <button>+</button>
                </div>
            </div>
        </div>
    </>
}
export default CheckoutProducts;
import styles from '../../style/IndexPage/indexCarosel.module.css';
import { FaArrowTurnUp } from "react-icons/fa6";
const IndexCaroselItem = ({handleClassList , data}) => {
    return <>
        <div className={styles.item}>
            <img src={data.img} alt="slide" />
            <div className={styles.intro}>
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.topic}>
                    {data.title}
                </div>
                <div className={styles.des}>
                    {data.des}
                </div>
                <button onClick={() => { handleClassList('showDetail') }} className={styles.seeMore}>see more<FaArrowTurnUp /></button>
            </div>
            <div className={styles.detail}>
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.des}>
                    {data.des}
                </div>
                <div className={styles.specification}>
                    <div>
                        <p>Quantity </p>
                        <p>{data.quantity}</p>
                    </div>
                    <div>
                        <p>Colors </p>
                        <p>{data.color.map((item)=>item)}</p>
                    </div>
                    <div>
                        <p>Material</p>
                        <p>{data.material}</p>
                    </div>
                    <div>
                        <p>Size </p>
                        <p>{data.size.map((item)=>item)}</p>
                    </div>
                    <div>
                        <p>Price</p>
                        <p>{data.price}</p>
                    </div>
                </div>
                <div className={styles.checkout}>
                    <button>Add to cart</button>
                    <button> CheckOut</button>
                </div>
            </div>
        </div>
    </>
}
export default IndexCaroselItem;
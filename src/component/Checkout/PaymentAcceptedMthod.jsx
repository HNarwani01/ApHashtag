import { FaCcPaypal,FaGooglePay,FaCreditCard } from "react-icons/fa";
import { SiPhonepe,SiPaytm  } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import styles from '../../style/Checkout/PaymentAcceptedMethod.module.css'

const PaymentAcceptedMethod = () => {
    return <>
        <div className="card mb-4 mb-lg-0">
            <div className="card-body">
                <p><strong>We accept</strong></p>
                <p className={styles.payment}>
                <SiPaytm />
                <FaGooglePay />
                <SiPhonepe />
                <FaCcPaypal />
                <FaCreditCard />
                <CiBank />
                </p>
            </div>
        </div>
    </>
}
export default PaymentAcceptedMethod;
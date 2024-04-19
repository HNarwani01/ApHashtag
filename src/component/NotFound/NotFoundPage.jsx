import { FaHome } from "react-icons/fa";
import { TbNotesOff } from "react-icons/tb";
import { Link } from 'react-router-dom';
import styles from '../../style/NotFound/NotFoundPage.module.css'

const NotFoundPage = () => {
    return <>
        <div className={styles.container}>
            <h1 className={styles.center}>404 Page Not Found</h1>
            <h2 className={styles.center}><TbNotesOff /></h2>
            <Link to='/' className={styles.notFound}>Go back to Home <FaHome/> </Link >
            <div className={`${styles.bgcolor} btn`}></div>
        </div>
    </>
}
export default NotFoundPage;
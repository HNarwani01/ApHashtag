import styles from '../../style/AllProducts/ProductPageIntro.module.css'

const ProductPageIntro = () => {
    return <>
        <div className={`container ${styles.noBG}`}>
            <div className="row gy-4">
                <div className={`col-lg-4 col-md-6 ${styles.aosInit} `} data-aos="fade-up" data-aos-delay="100">
                    <div className={`service-item  position-relative ${styles.imgDiv} `}>
                        <img className={styles.cardName} src="./src/assets/img-1.webp" alt="" srcSet="" />
                        
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.aosInit} `} data-aos="fade-up" data-aos-delay="100">
                    <div className={`service-item  position-relative ${styles.imgDiv} `}>
                        <img className={styles.cardName} src="./src/assets/img-2.webp" alt="" srcSet="" />
                        
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.aosInit} `} data-aos="fade-up" data-aos-delay="100">
                    <div className={`service-item  position-relative ${styles.imgDiv} `}>
                        <img className={styles.cardName} src="./src/assets/img-3.webp" alt="" srcSet="" />
                        
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.aosInit} `} data-aos="fade-up" data-aos-delay="100">
                    <div className={`service-item  position-relative ${styles.imgDiv} `}>
                        <img className={styles.cardName} src="./src/assets/img-4.webp" alt="" srcSet="" />
                        
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.aosInit} `} data-aos="fade-up" data-aos-delay="100">
                    <div className={`service-item  position-relative ${styles.imgDiv} `}>
                        <img className={styles.cardName} src="./src/assets/img-5.webp" alt="" srcSet="" />
                        
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.aosInit} `} data-aos="fade-up" data-aos-delay="100">
                    <div className={`service-item  position-relative ${styles.imgDiv} `}>
                        <img className={styles.cardName} src="./src/assets/img-6.webp" alt="" srcSet="" />
                        
                    </div>
                </div>

                

            </div>
        </div>
    </>
}
export default ProductPageIntro
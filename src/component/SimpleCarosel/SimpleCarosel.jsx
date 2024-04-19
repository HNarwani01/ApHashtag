import { useState, useEffect } from 'react';
import styles from '../../style/SimpleCarosel/SimpleCarosel.module.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SaleCaroselSlide from './SimpleCaroselSlide';

const SaleCarosel = () => {
    const [slideList, setSlideList] = useState([
        "./src/assets/sale-1.webp",
        "./src/assets/sale-2.webp",
        "./src/assets/sale-3.webp",
        "./src/assets/sale-4.webp"
    ]);

    const [classlist, setClassList] = useState('');

    const handleForSlider = (action) => {
        if (action === 'pre') {
            const last = slideList.pop();
            setSlideList([last, ...slideList]);
            setClassList('pre');
        } else if (action === 'next') {
            const [first, ...rest] = slideList;
            setSlideList([...rest, first]);
            setClassList('next');
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassList('');
        }, 500); // Adjust this delay as needed

        return () => clearTimeout(timer);
    }, [classlist]);

    const sliderClass = styles[classlist];

    return (
        <section className={`${styles.carousel} ${sliderClass}`}>
            <div className={styles.box}>
                <SaleCaroselSlide itemlist={slideList}/>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => handleForSlider('pre')}><FaArrowLeft /></button>
                <button onClick={() => handleForSlider('next')}><FaArrowRight /></button>
            </div>
        </section>
    );
};

export default SaleCarosel;

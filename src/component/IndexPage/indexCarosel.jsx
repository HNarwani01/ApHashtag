import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import IndexCaroselItem from "./IndexCaroselItem.jsx";
import { SlideList } from "../../Store/IndexPageSlider.jsx";
import styles from '../../style/IndexPage/indexCarosel.module.css';
import { useContext, useState } from "react";




const IndexCarosel =()=>{
    const [classList, setClassList] = useState(['','']);
    const handleClassList =(Action)=>{
        if (Action==='showDetail' || Action==='goBack') {
            const updatedClassList = [Action, classList[1]];
          setClassList(updatedClassList);
        }else if(Action==='next'){
                if (dataOrder.length <= 1) return dataOrder; 
                const [first, ...rest] = dataOrder;
            setDataOrder([...rest, first]); 
            const updatedClassList =  [ classList[0],Action];
          setClassList(updatedClassList); 
        }else if(Action==='pre'){
            if (dataOrder.length <= 1) return; 
            const last = dataOrder.pop();
            setDataOrder([last, ...dataOrder]);
            const updatedClassList = [ classList[0],Action];
          setClassList(updatedClassList);
        }

    }
    const {currentData} = useContext(SlideList)
    const [dataOrder, setDataOrder] = useState(currentData);
    const sliderclass=styles[classList[1]];
    const infoClass = styles[classList[0]];
    return <>
        <div className={`${styles.carosel} ${infoClass} ${sliderclass}`} >
        <div className={styles.list}>
            {dataOrder.map((slide)=> <IndexCaroselItem key={slide.id} data={slide} handleClassList={handleClassList}/>)}
            
        </div>
        <div className={styles.arrows}>
            <button onClick={()=>{handleClassList('pre')}} id={styles.pre}><GrFormPreviousLink /></button>
            <button onClick={()=>{handleClassList('goBack')}} id={styles.back}> Go back</button>
            <button onClick={()=>{handleClassList('next')}} id={styles.next}> <GrFormNextLink /> </button>
        </div>
    </div>
    </>
}
export default IndexCarosel;
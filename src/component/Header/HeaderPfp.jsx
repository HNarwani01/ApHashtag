import { FaUser} from "react-icons/fa";
const HeaderPfp =()=>{
    let login = false;
    return login ? (
        <div><FaUser /></div>
      ) : (
        <div><img className="PfpImage" src="https://i.pinimg.com/originals/7d/b9/16/7db9162fb26619d9a18a90542c1ea15a.jpg"></img></div>
      );    
}
export default HeaderPfp;
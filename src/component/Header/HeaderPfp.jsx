import { FaUser} from "react-icons/fa";
const HeaderPfp =()=>{
    let login = false;
    return login ? (
        <div><FaUser /></div>
      ) : (
        <div><img className="PfpImage" src="./src/assets/luffyPfp.jpg"></img></div>
      );    
}
export default HeaderPfp;
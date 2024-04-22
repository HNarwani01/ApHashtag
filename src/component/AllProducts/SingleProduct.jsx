import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../../style/AllProducts/SingleProduct.css'
import '../../style/AllProducts/FeatureProducts.css'
import { useContext, useState } from "react";
import { ProductList } from "../../Store/ProductStore";

const SingleProduct = ({ product }) => {
    const { AddTOCart } = useContext(ProductList)
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    return <>
        <input type="checkbox" className="hiddenCB" name="" id={product.id}  checked={isChecked}
        onChange={handleCheckboxChange}/>
        <div className={`col-md-3 btn ${isChecked ? 'position-relative' : ''}`}>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                <FaCheck />
            </span>
            <div className="product-wrapper mb-45 text-center">
                <div className="product-img">
                    
                    <a href="#" data-abc="true">
                        <img className="ThumbImage" src={product.thumbnail} alt="" />
                    </a>
                    <span className="text-center"><MdCurrencyRupee />{product.price}</span>
                    <div className="product-action">
                        <div className="product-action-style" >
                            <Link to='' href="#"><i ><FaEye /></i></Link>
                            <a data-id={product.id} className={`addToCart `} onClick={() => { AddTOCart(product) }}>
                                <label htmlFor={product.id}>
                                    <i ><FaShoppingCart /></i>

                                </label>
                            </a>
                            <a href="#"><i ><FaHeart /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SingleProduct;
import { FaEye , FaHeart , FaShoppingCart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../../style/AllProducts/FeatureProducts.css'

const SingleProduct = ({product}) => {
    return <>
        <div className="col-md-3">
            <div className="product-wrapper mb-45 text-center">
                <div className="product-img">
                    <a href="#" data-abc="true">
                        <img className="ThumbImage" src={product.thumbnail} alt="" />
                    </a>
                    <span className="text-center"><MdCurrencyRupee />{product.price}</span>
                    <div className="product-action">
                        <div className="product-action-style">
                            <Link to='' href="#"><i ><FaEye /></i></Link>
                            <a href="#"><i ><FaShoppingCart /></i></a>
                            <a href="#"><i ><FaHeart /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SingleProduct;
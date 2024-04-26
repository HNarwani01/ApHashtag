import { FaPlus,FaMinus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdDelete,MdOutlineCurrencyRupee } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ProductList } from "../../Store/ProductStore";
import '../../style/Checkout/CartProduct.css'

const CartProduct = ({value}) => {
    
    const { cartProductlist,EditCartProductList } = useContext(ProductList);
    const [product, setProduct] = useState(cartProductlist.find(product => product.id === value.id));
    const [amount , setAmount] = useState(product.quantity)
    const [price, setPrice] = useState(product.price)
    useEffect(()=>{
    },[product.quantity])


    const handleQuantity=async (action)=>{
        if (action==='INCREASE') {
            setAmount(amount+1)
            console.log('calling fn with ' + amount);
            EditCartProductList('INCREASE_QUANTIY',product,amount+1)
            
        }else if (action==='DECREASE') {
            if (amount>1) {
                setAmount(amount-1)
                console.log('calling fn with ' + amount);
                EditCartProductList('DECREASE_QUANTIY',product,amount-1)
            }
            
        }
    }

    


    return <>
        <div className="row">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src={value.thumbnail}
                        className="w-100" alt="Blue Jeans Jacket" />
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                    </a>
                </div>

            </div>

            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">

                <p><strong>{value.title}</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                    title="Remove item">
                    <MdDelete />
                </button>
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                    title="Move to the wish list">
                    <FaHeart />
                </button>

            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2"
                        onClick={()=>{handleQuantity('DECREASE')}}>
                        <FaMinus />
                    </button>

                    <div data-mdb-input-init className="form-outline">
                        <p className="displayQuantity">{amount}</p>
                        
                    </div>

                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2"
                        onClick={()=>{handleQuantity('INCREASE')}}>
                        <FaPlus />
                    </button>
                </div>



                <p className="text-start text-md-center">
                    <strong><MdOutlineCurrencyRupee /> {price*amount}</strong>
                </p>

            </div>
        </div>
        <hr className="my-4" />
    </>
}
export default CartProduct;


// "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
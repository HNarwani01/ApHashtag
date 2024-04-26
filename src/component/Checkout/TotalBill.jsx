import { useContext, useState ,useEffect } from "react";
import { ProductList } from "../../Store/ProductStore";


const TotalBill = ({value}) => {
    const {cartProductlist} = useContext(ProductList);
    const [totalBill, setTotalBill] = useState(0)
    useEffect(()=>{
        let tempvalue = 0
        cartProductlist.map(item=>{
            tempvalue += item.price*item.quantity
        })
        setTotalBill(tempvalue)
    },[cartProductlist])


    return <>
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Products
                            <span>$ {totalBill}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span>Gratis</span>
                        </li>
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Total amount</strong>
                                <strong>
                                    <p className="mb-0">(including VAT)</p>
                                </strong>
                            </div>
                            <span><strong>$ 7</strong></span>
                        </li>
                    </ul>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
                        Go to checkout
                    </button>
                </div>
            </div>
        </div>
    </>
}
export default TotalBill;
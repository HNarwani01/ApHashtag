import CartProduct from "./CartProduct";
import PaymentAcceptedMethod from "./PaymentAcceptedMthod";
import TotalBill from "./TotalBill";
const NonEmptyCart = ({list})=>{

    return <>
        <section className="h-100 gradient-custom">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Cart - 2 items</h5>
                            </div>
                            <div className="card-body">
                                {list.map(item=>{
                                    return <CartProduct key={item.id} value={item} />
                                })}
                                
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <p><strong>Expected shipping delivery</strong></p>
                                <p className="mb-0">12.10.2020 - 14.10.2020</p>
                            </div>
                        </div>
                        <PaymentAcceptedMethod/>
                    </div>
                    <TotalBill value={list}/>
                </div>
            </div>
        </section>
    </>
}
export default NonEmptyCart; 
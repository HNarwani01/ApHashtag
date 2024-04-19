import { useContext } from 'react';
import '../../style/AllProducts/FeatureProducts.css'

import SingleProduct from './SingleProduct';
import { ProductList } from '../../Store/ProductStore';
const FeatureProducts = () => {
    const { productlist } = useContext(ProductList)
    console.log(`product page here `);
    console.log(productlist);
    return <>

        <div className="container d-flex justify-content-center mt-100 ">
            <div className="row ptb-20">
                {productlist.map((product) => {
                    return <SingleProduct  key={product.id} product={product} />
                })}
            </div>
        </div>
    </>
}
export default FeatureProducts;
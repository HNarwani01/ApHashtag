import  React, { useCallback, useContext, useEffect, useState } from 'react';
import '../../style/AllProducts/ProductPreview.css'
import { FaHeart } from "react-icons/fa";
import { ProductList } from '../../Store/ProductStore';
import { useParams } from 'react-router-dom';
const ProductPreview = () => {
	const { productlist } = useContext(ProductList);
	const { id } = useParams();
	const [productLoading, setProductLoading] = useState(false)
	const [activeImage, setActiveImage] = useState(``)
	const [productElement, setProductElement] = useState({});
	const [imageArray, setImageArray] = useState([]);
	console.log(`logging the data recived from store`);
	console.log(productlist);
	useEffect(()=>{
		console.log(`inside the use effect`);
		const findproduct = async (id)=>{
			let data = await productlist.find((product)=> product.id==id)
			setImageArray(data.images)
			setProductElement(data)
			setActiveImage(data.thumbnail)
			console.log(productElement);
		}
		findproduct(id);
	},[id, productlist])
	

	
	const handleSetActiveImage = (url) => {
		setActiveImage(url);
	}
	return   <>
				<div className="container mb-40">
				<div className="card">
					<div className="container-fliud">
						<div className="wrapper row">
							<div className="preview col-md-6">
	
								<div className="preview-pic tab-content">
									<div className="tab-pane active" id="pic-1">
										<img src={activeImage} />
									</div>
								</div>
								<ul className="preview-thumbnail nav nav-tabs">
	
									{
										imageArray.map((image) => {
											return <>
												<li  onClick={() => {
													handleSetActiveImage(`${image}`)
												}} className="active">
													<a data-target="#pic-1" data-toggle="tab">
														<img className='alternateShowImage' src={`${image}`} />
													</a>
												</li>
	
											</>
										})
									}
								</ul>
	
							</div>
							<div className="details col-md-6">
								<h3 className="product-title">{productElement.title}</h3>
								<div className="rating">
									<div className="stars">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
									<span className="review-no">41 reviews</span>
								</div>
								<p className="product-description">{productElement.description}</p>
								<h4 className="price">current price: <span>${productElement.price
	}</span></h4>
								<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
								<h5 className="sizes">sizes:
									<span className="size" data-toggle="tooltip" title="small">s</span>
									<span className="size" data-toggle="tooltip" title="medium">m</span>
									<span className="size" data-toggle="tooltip" title="large">l</span>
									<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
								</h5>
								<h5 className="colors">colors:
									<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
									<span className="color green"></span>
									<span className="color blue"></span>
								</h5>
								<div className="action ">
									<button className="add-to-cart btn addtocartcustom" type="button">add to cart</button>
									<button className="like btn btn-default" type="button"><FaHeart /></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	
}
export default ProductPreview;



// return <>
// 		{(imageArray && imageArray.length?(
// 			<div className="container mb-40">
// 			<div className="card">
// 				<div className="container-fliud">
// 					<div className="wrapper row">
// 						<div className="preview col-md-6">

// 							<div className="preview-pic tab-content">
// 								<div className="tab-pane active" id="pic-1">
// 									<img src={activeImage} />
// 								</div>
// 							</div>
// 							<ul className="preview-thumbnail nav nav-tabs">

// 								{
// 									imageArray.map((image) => {
// 										return <>
// 											<li  onClick={() => {
// 												handleSetActiveImage(`${image}`)
// 											}} className="active">
// 												<a data-target="#pic-1" data-toggle="tab">
// 													<img className='alternateShowImage' src={`${image}`} />
// 												</a>
// 											</li>

// 										</>
// 									})
// 								}
// 							</ul>

// 						</div>
// 						<div className="details col-md-6">
// 							<h3 className="product-title">{productElement.title}</h3>
// 							<div className="rating">
// 								<div className="stars">
// 									<span className="fa fa-star checked"></span>
// 									<span className="fa fa-star checked"></span>
// 									<span className="fa fa-star checked"></span>
// 									<span className="fa fa-star"></span>
// 									<span className="fa fa-star"></span>
// 								</div>
// 								<span className="review-no">41 reviews</span>
// 							</div>
// 							<p className="product-description">{productElement.description}</p>
// 							<h4 className="price">current price: <span>${productElement.price
// }</span></h4>
// 							<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
// 							<h5 className="sizes">sizes:
// 								<span className="size" data-toggle="tooltip" title="small">s</span>
// 								<span className="size" data-toggle="tooltip" title="medium">m</span>
// 								<span className="size" data-toggle="tooltip" title="large">l</span>
// 								<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
// 							</h5>
// 							<h5 className="colors">colors:
// 								<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
// 								<span className="color green"></span>
// 								<span className="color blue"></span>
// 							</h5>
// 							<div className="action ">
// 								<button className="add-to-cart btn addtocartcustom" type="button">add to cart</button>
// 								<button className="like btn btn-default" type="button"><FaHeart /></button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		):'Loading')}

// 	</>
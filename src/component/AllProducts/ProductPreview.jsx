import { useContext, useEffect, useState } from 'react';
import '../../style/AllProducts/ProductPreview.css'
import { FaHeart } from "react-icons/fa";
import { ProductList } from '../../Store/ProductStore';
// import { useParams } from 'react-router-dom';
const ProductPreview = () => {
	const { productlist } = useContext(ProductList);
	// const { productId } = useParams();
	const [productElement, setProductElement] = useState(null);
  
	useEffect(() => {
	  
	}, []);
  
	const findProductById = async (id) => {
	  return productlist.find(product => product.id === id);
	};
  
	const [activeImage,setActiveImage]= useState('https://i.pinimg.com/originals/7d/b9/16/7db9162fb26619d9a18a90542c1ea15a.jpg')
	const handleSetActiveImage=(url)=>{
		setActiveImage(url);
	}
	return <>
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
								<li onClick={()=>{
									handleSetActiveImage('https://i.pinimg.com/736x/d1/77/69/d1776982b410fbe59c275f003d9cc2a6.jpg')
								}} className="active"><a data-target="#pic-1" data-toggle="tab"><img src="https://i.pinimg.com/736x/d1/77/69/d1776982b410fbe59c275f003d9cc2a6.jpg" /></a></li>
								<li><a data-target="#pic-2" data-toggle="tab"><img src="https://i.pinimg.com/originals/7d/b9/16/7db9162fb26619d9a18a90542c1ea15a.jpg" /></a></li>
								<li><a data-target="#pic-3" data-toggle="tab"><img src="https://i.pinimg.com/originals/7d/b9/16/7db9162fb26619d9a18a90542c1ea15a.jpg" /></a></li>
								<li><a data-target="#pic-4" data-toggle="tab"><img src="https://i.pinimg.com/originals/7d/b9/16/7db9162fb26619d9a18a90542c1ea15a.jpg" /></a></li>
								<li><a data-target="#pic-5" data-toggle="tab"><img src="https://i.pinimg.com/originals/7d/b9/16/7db9162fb26619d9a18a90542c1ea15a.jpg" /></a></li>
							</ul>

						</div>
						<div className="details col-md-6">
							<h3 className="product-title">men's shoes fashion</h3>
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
							<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
							<h4 className="price">current price: <span>$180</span></h4>
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
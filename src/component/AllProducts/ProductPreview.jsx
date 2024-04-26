import  React, { useCallback, useContext, useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import '../../style/AllProducts/ProductPreview.css'
import { FaHeart } from "react-icons/fa";
import { ProductList } from '../../Store/ProductStore';
import { useParams } from 'react-router-dom';
const ProductPreview = () => {
	let size =[26,28,30,32,34]
	const { productlist,AddTOCart,RemoveFromCart } = useContext(ProductList);
	const { id } = useParams();
	const [productLoading, setProductLoading] = useState(false)
	const [selectedSize, setSelectedSize] = useState()
	const [selectedColor, setSelectedColor] = useState()
	const [activeImage, setActiveImage] = useState(``)
	const [productElement, setProductElement] = useState({});
	const [imageArray, setImageArray] = useState([]);
	const [inCart, setInCart]= useState('Add TO Cart')
	const handleCartClick =()=>{
		if (inCart==='Add TO Cart') {
			AddTOCart(productElement);
			setInCart('Remove From Cart');
		}else{
			setInCart('Add TO Cart')
		}
	}
	const [coloroptions,setColoroptions]= useState([
		{
			name:"lightGreen",
			images:['https://i.pinimg.com/originals/9a/26/cf/9a26cf58279ea0666216620ddc0d1514.jpg',
			'https://upload-os-bbs.hoyolab.com/upload/2022/02/17/113818077/8db437e6ae928ee7edc51cefe9c37760_2131704569219544716.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80',
			'https://rukminim2.flixcart.com/image/850/1000/kuyf8nk0/poster/i/o/y/medium-tanjiro-fanart-anime-demon-slayer-kimetsu-no-yaiba-original-imag7ys5mptzzchh.jpeg?q=90&crop=false',
			'https://i.pinimg.com/736x/a2/dd/73/a2dd7328bfcfc256268370a5baaa1fe8.jpg'
		]
		},{
			name:'red',
			images:[
				'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/14/one-piece-gear-5-luffy.jpeg',
				'https://i.pinimg.com/736x/4f/61/3d/4f613d25f36ae27af83e2262db6f1c3e.jpg',
				'https://avatarfiles.alphacoders.com/364/364185.png',
				'https://i.pinimg.com/originals/15/8f/c7/158fc7374487d49b93e694c4ce29209a.jpg'
			]
		},
		{
			name:'black',
			images:
			[
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7M9gevaqj_8M0iJ-sticZvpUxigMneQxhNrmxjDsrjA&s',
				'https://s1.zerochan.net/Kurosaki.Ichigo.600.2341605.jpg',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE0r3ZrNaZgVKhjDtXO9lJebDX27NTtEIdH-kT6wX9Q&s',
				'https://lh3.googleusercontent.com/proxy/fNSI3pPF3pjPeR7y0hkRFNlVfRu3zgKXcrZJ1uK7ACxik7-L9YsUr66ScwiKHmPjOMbZtWgJKHqr0JynT_LYRW4fnTtwIji8ngDuPc8jhUf-EuBNK2ChdSjkw2KR9EtZ'
			]
		}
	])   
	
	useEffect(()=>{
		setProductLoading(true)
		const findproduct = async (id)=>{
			let data = await productlist.find((product)=> product.id==id)
			let newObj = {
				name: 'deeppink',
				images: [...data.images] 
			};
			let already = await coloroptions.find((color) => color.name === newObj.name);
			
			if (!already) {
				setColoroptions(prevOptions => [...prevOptions, newObj])
			}
			setImageArray(data.images)
			setProductElement(data)
			setActiveImage(data.thumbnail)
			setProductLoading(false)
		}
		findproduct(id);
		
	},[id, productlist])
	const handleActiveColor=(object)=>{
		setImageArray(object.images)
		setActiveImage(object.images[0])
		setSelectedColor(object.name)
	}

	
	const handleSetActiveImage = (url) => {
		setActiveImage(url);
	}
	return   <>
				{productLoading?<h1>Loading...</h1> :(
					
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
									<h4 className="price">current price: <span>₹ {productElement.price
		}</span></h4>
									<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
									<div className="customSizes">
										{size.map(eachsize=>{
											return <button 
													className={`btn ${eachsize==selectedSize?'active':''}`} 
													id={`size${eachsize}`}
													onClick={()=>{setSelectedSize(eachsize)}}
													>
														{eachsize}
													</button>
										})}
									</div>
									<div className="customColors">
										<h5>colors</h5>
										{coloroptions.map(item=>{
											return <div 
											className={`btn ${item.name===selectedColor?'active':'hide'}`}
											style={{backgroundColor:`${item.name}`}}
											onClick={()=>{handleActiveColor(item)}}
											>
												<i> <FaCheck /></i> 
											</div>
										})}
										
									</div>
									<div className="action ">
										<button 
										className="add-to-cart btn addtocartcustom" type="button"
										onClick={()=>{handleCartClick(productElement)}}
										>
											{inCart}</button>
										<button className="like btn btn-default" type="button"><FaHeart /></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				)}
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
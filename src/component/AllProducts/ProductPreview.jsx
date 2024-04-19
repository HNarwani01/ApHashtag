import styles from '../../style/AllProducts/ProductPreview.module.css'
const ProductPreview =()=>{
    return <>
            <div className={styles.container}>
  <div className={`${styles.card} card`}>
    <div className={styles.containerFluid}>
      <div className={`${styles.wrapper} row`}>
        <div className={`${styles.preview} row`}>
          
          <div className={`${styles.previewPic} ${styles.tabContent}`}>
            <div className={`${styles.tabPane} ${styles.active}`} id="pic-1"><img src="https://i.imgur.com/lAQxXCK.jpg" /></div>
            <div className={styles.tabPane} id="pic-2"><img src="https://i.imgur.com/lAQxXCK.jpg" /></div>
            <div className={styles.tabPane} id="pic-3"><img src="https://i.imgur.com/lAQxXCK.jpg" /></div>
            <div className={styles.tabPane} id="pic-4"><img src="https://i.imgur.com/lAQxXCK.jpg" /></div>
            <div className={styles.tabPane} id="pic-5"><img src="https://i.imgur.com/lAQxXCK.jpg" /></div>
          </div>
          <ul className={`${styles.previewThumbnail} preview-thumbnail nav nav-tabs`}>
            <li className={styles.active}><a data-target="#pic-1" data-toggle="tab"><img src="https://i.imgur.com/lAQxXCK.jpg" /></a></li>
            <li><a data-target="#pic-2" data-toggle="tab"><img src="https://i.imgur.com/lAQxXCK.jpg" /></a></li>
            <li><a data-target="#pic-3" data-toggle="tab"><img src="https://i.imgur.com/lAQxXCK.jpg" /></a></li>
            <li><a data-target="#pic-4" data-toggle="tab"><img src="https://i.imgur.com/lAQxXCK.jpg" /></a></li>
            <li><a data-target="#pic-5" data-toggle="tab"><img src="https://i.imgur.com/lAQxXCK.jpg" /></a></li>
          </ul>
          
        </div>
        <div className="details col-md-6">
          <h3 className="productTitle">men's shoes fashion</h3>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <span className="reviewNo">41 reviews</span>
          </div>
          <p className="productDescription">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
          <h4 className="price">current price: <span>$180</span></h4>
          <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
          <h5 className="sizes">sizes:
            <span className="size" data-toggle="tooltip" title="small">s</span>
            <span className="size" data-toggle="tooltip" title="medium">m</span>
            <span className="size" data-toggle="tooltip" title="large">l</span>
            <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
          </h5>
          <h5 className="colors">colors:
            <span className="color orange notAvailable" data-toggle="tooltip" title="Not In store"></span>
            <span className="color green"></span>
            <span className="color blue"></span>
          </h5>
          <div className="action">
            <button className="addToCart btn btn-default" type="button">add to cart</button>
            <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
}
export default ProductPreview;
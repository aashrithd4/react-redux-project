import React, { useEffect, useState } from'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import store from '../redux/store';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const {productID} = useParams();// the value inside the const i.e inside the JSX tag should be similar to the route value mentioned 
    // in the App.js
    const product = useSelector(state => state.product)
    console.log(productID);
    console.log("single product", product)
    const {image, title, price, description, category} = product;
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`)
                                    .catch(err => console.log("Err", err));
        console.log(response.data);
        store.dispatch(selectedProduct(response.data));
    }
    useEffect(() => {
        if(productID && productID!== "")
        {
            fetchProductDetail()
            setLoading(false)
        }
        return () => {
            store.dispatch(removeSelectedProduct())
        }
    },[productID])// useEffect will run once product id changes 

    const [isloading, setLoading] = useState(true);

    const loader = () => {
        return (
            <div>
                isloading...
            </div>
        )
    }

    const renderData = () => {
        return(
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={image} />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
    
    return (
          <>
            <div className="ui grid container">
                {isloading? 
                    <div>
                        isloading...
                    </div> : 
                renderData()}
            </div>
          </>
    )
}

export default ProductDetail;


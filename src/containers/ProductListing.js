import React, {useEffect} from'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import store from '../redux/store';
import {setProducts} from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const fetchProducts = async() => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Err", err);
            });
        console.log("response", response.data);
        store.dispatch(setProducts(response.data));
        //dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log( "products", products);
    return (
        <div className='ui grid container' style={{margin:'auto'}}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
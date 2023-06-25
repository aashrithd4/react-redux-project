import { combineReducers } from'redux';
import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
});
//allProducts and product is nothing but a key wheich is used in below code base

//const products = useSelector((state) => state.allProducts.products);
//const product = useSelector(state => state.product)
export default reducers;
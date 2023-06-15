import './App.css';
import {ProductContainer} from './components/ProductContainer';
import {Product} from './components/Product';
import data from './components/products.json';
import { Discount } from './components/Discount';



const App =()=>{
    return(
        <ProductContainer>
            {data.map(product => 
            <Product 
                key={product.name}
                name={product.name}
                discount={product.discount}
                oldPrice= {product.price}
                newPrice={product.price - product.price*product.discount/100}
            /> )}   
     </ProductContainer>
    )}

export default App
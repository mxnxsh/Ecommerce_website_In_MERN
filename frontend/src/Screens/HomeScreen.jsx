import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
   const [products, setProduct] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const { data } = await axios.get('api/products');
         setProduct(data);
      };
      fetchData();
      return () => {};
   }, []);

   return (
      <div>
         <ul className='products'>
            {products.map(product => (
               <li key={product._id}>
                  <div className='product'>
                     <img
                        className='product-image'
                        src={product.image}
                        alt='Images'
                     />
                     <div className='product-name'>
                        <Link to={`/product/${product._id}`}>
                           {product.name}
                        </Link>
                     </div>
                     <div className='product-brand'>{product.brand}</div>
                     <div className='product-price'>${product.price}</div>
                     <div className='product-rating'>
                        {product.rating} (Reviews)
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default HomeScreen;

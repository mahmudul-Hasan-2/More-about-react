import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({ products }) => {

    let product = use(products);
    console.log(product);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-[75%]'>
            {
                product.map(p => <Product key={p.id} p={p}></Product>)
            }
        </div>
    );
};

export default Products;
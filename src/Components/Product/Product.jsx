import React from 'react';

const Product = ({ p }) => {
    console.log(p);
    return (
        <div className='max-w-3xl mx-auto'>
            <div className=''>
                <div className='w-80 sm:w-auto text-start space-y-5 mx-auto m-10 p-5 sm:p-10 border-2 flex flex-col grow min-h-full bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-orange-900/20 border-gray-800 rounded-4xl'>
                    <img src={p.image} alt="" className='w-[200px] h-[200px] object-contain mx-auto' />

                    <div className=''>
                        <h2 className='text-white font-semibold'>{p.title}</h2>
                    </div>
                    <div>
                        <p>{p.description}</p>
                    </div>
                    <div>
                        <h2>Category: {p.category}</h2>
                    </div>
                    <div>
                        <h2>Rating</h2>

                        <div>
                            <h2>{p.rating.count} Rate: {p.rating.rate}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
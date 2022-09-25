import React, { useEffect, useState } from 'react';
import './Shopping.css';

const Shopping = () => {
    return (
        <div className='shopping'>
            <DisplayShop></DisplayShop>
            <OrderSummery></OrderSummery>
        </div>
    );
};


// Display items here
const DisplayShop = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className='grid grid-cols-2 xl:grid-cols-3 gap-12 px-24 py-28'>
            {items.map(item => <Items key={item.id} item={item}></Items>)}
        </div>
    )
}

// individual items
const Items = props => {
    const { img, name, price, seller, ratings } = props.item;
    return (
        <div className='border-2 border-gray-400 rounded-lg overflow-hidden flex flex-col justify-between'>
            <div>
                <img className='rounded-xl p-2' src={img} alt="" />
                <div className='px-4 py-1'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <h3 className='text-lg font-semibold'>Price: {price}</h3>
                </div>
            </div>
            <div>
                <div className='p-4'>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings > 1 ? ratings + ' Stars' : ratings + ' Star'}</p>
                </div>
                <button className='bg-orange-200 w-full py-3 text-lg font-semibold border-t-2 border-gray-400'>Add to Cart</button>
            </div>
        </div>
    )
}






// Order Summer Part
const OrderSummery = () => {
    return (
        <div className='bg-orange-200 text-slate-700'>
            <h1 className='text-center py-12 text-3xl font-semibold'>Order Summary</h1>
            <div className='px-8 pb-12 text-lg font-semibold flex flex-col gap-3'>
                <p>Selected Items: <span>0</span></p>
                <p>Total Price: $<span>0</span></p>
                <p>Total Shipping Charge: $<span>0</span></p>
                <p>Tax: $<span>0</span></p>
                <h2 className='text-2xl'>Grand Total: $<span>0</span></h2>
            </div>
            <div className='flex flex-col gap-2 px-5'>
                <button className='bg-red-600 text-white px-5 py-2 text-lg font-semibold rounded-md'>Clear Cart</button>
                <button className='bg-yellow-600 text-white px-5 py-2 text-lg font-semibold rounded-md'>Review Order</button>
            </div>
        </div>
    )
}

export default Shopping;
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
                <p>Rating: {ratings}</p>
                </div>
                <button className='bg-orange-200 w-full py-3 text-lg font-semibold border-t-2 border-gray-400'>Add to Cart</button>
            </div>
        </div>
    )
}






// Order Summer Part
const OrderSummery = () => {
    return (
        <div className='bg-orange-200'>
            <p>This is order summery</p>
        </div>
    )
}

export default Shopping;
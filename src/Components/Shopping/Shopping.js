import React, { useEffect, useState } from 'react';
import './Shopping.css';

const Shopping = () => {
    const [selectedItems, setSelectedItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = ({price}) => {
        setSelectedItems(selectedItems + 1);
        setTotalPrice(totalPrice + price);
    }

    return (
        <div className='shopping'>
            <DisplayShop addToCart={addToCart}></DisplayShop>
            <OrderSummery selectedItems={selectedItems} totalPrice={totalPrice}></OrderSummery>
        </div>
    );
};


// Display items here
const DisplayShop = props => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className='grid grid-cols-2 xl:grid-cols-3 gap-12 px-24 py-28'>
            {items.map(item => <Items key={item.id} item={item} addToCart={props.addToCart}></Items>)}
        </div>
    )
}

// individual items
const Items = props => {
    const { img, name, price, seller, ratings} = props.item;
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
                <button className='bg-orange-200 active:bg-orange-300 w-full py-3 text-lg font-semibold border-t-2 border-gray-400' onClick={() => props.addToCart(props.item)}>Add to Cart</button>
            </div>
        </div>
    )
}






// Order Summer Part
const OrderSummery = ({selectedItems, totalPrice}) => {
    
    return (
        <div className='bg-orange-200 text-slate-700 sticky top-0 right-0 h-screen'>
            <h1 className='text-center py-12 text-3xl font-semibold'>Order Summary</h1>
            <div className='px-8 pb-12 text-lg font-semibold flex flex-col gap-3'>
                <p>Selected Items: <span>{selectedItems}</span></p>
                <p>Total Price: $<span>{totalPrice}</span></p>
                <p>Total Shipping Charge: $<span>{selectedItems*30}</span></p>
                <p>Tax: $<span>{totalPrice/10}</span></p>
                <h2 className='text-2xl'>Grand Total: $<span>{totalPrice+(selectedItems*30)+(totalPrice/10)}</span></h2>
            </div>
            <div className='flex flex-col gap-2 px-5'>
                <button className='bg-red-600 active:bg-red-700 text-white px-5 py-2 text-lg font-semibold rounded-md'>Clear Cart</button>
                <button className='bg-yellow-600 active:bg-yellow-700 text-white px-5 py-2 text-lg font-semibold rounded-md'>Review Order</button>
            </div>
        </div>
    )
}

export default Shopping;
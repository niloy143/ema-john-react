import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import OrderSummery from './OrderSummery';
import './Shopping.css';


const Shopping = ({addToCart, clearCart, items, summery}) => {

    

    return (
        <div className='shopping'>
            <DisplayShop addToCart={addToCart} items={items}></DisplayShop>
            <OrderSummery clearCart={clearCart} summery={summery}></OrderSummery>
        </div>
    );
};


// Display items here
const DisplayShop = ({ addToCart, items }) => {


    return (
        <div className='grid grid-cols-2 xl:grid-cols-3 gap-12 px-24 py-28'>
            {items.map(item => <Items key={item.id} item={item} addToCart={addToCart}></Items>)}
        </div>
    )
}

// individual items
const Items = props => {
    const { img, name, price, seller, ratings, id } = props.item;
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
                <button className='bg-orange-200 active:bg-orange-300 w-full py-3 text-lg font-semibold border-t-2 border-gray-400 flex justify-center items-center gap-3' onClick={() => props.addToCart(id)}> <FontAwesomeIcon icon={faCartShopping}/> <span>Add to Cart</span></button>
            </div>
        </div>
    )
}

export default Shopping;
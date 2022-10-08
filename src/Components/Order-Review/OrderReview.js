import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import OrderSummery from '../Shopping/OrderSummery';

const Order = ({ clearCart, summery, items, getDetails }) => {




    const cartItems = [];

    if (items.length) {
        const lsItem = localStorage.getItem('selectedItems');
        let selectedItems = lsItem ? JSON.parse(lsItem) : {};

        for (const id in selectedItems) {
            const theItem = items.find(item => item.id === id);
            theItem.quantity = selectedItems[id];
            cartItems.push(theItem)
        }

    }

    return (
        <div>
            <OrderSummery clearCart={clearCart} summery={summery} />
            <div className='flex flex-col gap-2 my-5'>
                {cartItems.map(item => <OrderedItems key={item.id} cartItems={item} getDetails={getDetails} />)}
            </div>
        </div>
    );
};

const OrderedItems = ({ cartItems, getDetails }) => {
    const { img, name, price, shipping, quantity, id } = cartItems;
    const removeItem = id => {
        const lsItem = localStorage.getItem('selectedItems');
        let selectedItems = lsItem ? JSON.parse(lsItem) : {};

        delete selectedItems[id];

        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        getDetails();
    }

    return (
        <div className='border p-2 mx-auto w-1/2 flex gap-2 items-center rounded-md'>
            <img className='h-28 rounded' src={img} alt="" />
            <div className='flex justify-between items-center grow px-2'>
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p>Quantity: <span className='text-orange-600'>{quantity}</span></p>
                    <p>Price: <span className='text-orange-600'>${price * quantity}</span></p>
                    <p>Shipping Charge: <span className='text-orange-600'>${shipping * quantity}</span></p>
                </div>
                <button className='bg-red-200 w-12 h-12 rounded-full flex items-center justify-center active:bg-red-300' onClick={() => removeItem(id)}>
                    <FontAwesomeIcon icon={faTrash} className='text-xl text-red-600' />
                </button>
            </div>
        </div>
    )
}

export default Order;
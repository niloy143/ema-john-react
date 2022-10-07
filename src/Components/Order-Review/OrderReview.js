import React from 'react';
import OrderSummery from '../Shopping/OrderSummery';

const Order = ({ clearCart, summery }) => {

    const lsItem = localStorage.getItem('selectedItems');
    let selectedItems = lsItem ? JSON.parse(lsItem) : {};

    return (
        <div>
            <OrderSummery clearCart={clearCart} summery={summery} />
            {console.log(selectedItems)}
        </div>
    );
};

export default Order;
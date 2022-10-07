import { faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Link } from 'react-router-dom';

// Order Summer Part
const OrderSummery = ({ clearCart, summery }) => {
    const { itemSelected, totalPrice, shippingCharge, tax, grandTotal } = summery;
    return (
        <div className='bg-orange-200 text-slate-700 fixed top-0 right-0 bottom-0 pt-20'>
            <h1 className='text-center py-12 text-3xl font-semibold'>Order Summary</h1>
            <div className='px-8 pb-12 text-lg font-semibold flex flex-col gap-3'>
                <p>Selected Items: {itemSelected}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax ? tax.toFixed(2) : tax}</p>
                <h2 className='text-2xl'>Grand Total: ${grandTotal ? grandTotal.toFixed(2) : grandTotal}</h2>
            </div>
            <div className='flex flex-col gap-2 px-5'>
                <button className='bg-red-600 active:bg-red-700 text-white px-5 py-2 text-lg font-semibold rounded-md flex justify-center items-center gap-3' onClick={() => clearCart()}> <FontAwesomeIcon icon={faTrash} /> <span>Clear Cart</span></button>
                <button className='bg-yellow-600 active:bg-yellow-700 text-white px-5 py-2 text-lg font-semibold rounded-md flex justify-center items-center gap-3'><Link to="/order-review"> <FontAwesomeIcon icon={faCircleInfo} /> <span>Review Order</span></Link></button>
            </div>
        </div>
    )
}

export default OrderSummery;
import logo from '../../logo.svg';
import React from 'react';

const Header = () => {
    return (
        <div className='bg-slate-700 text-slate-200 flex justify-around items-center py-5'>
            <img src={logo} alt="logo" />
            <div className='flex gap-8 text-lg font-semibold'>
                <a className='hover:text-orange-300' href="https://niloy.fun" target='_blank' rel='noreferrer'>Order</a>
                <a className='hover:text-orange-300' href="https://niloy.fun" target='_blank' rel='noreferrer'>Order Review</a>
                <a className='hover:text-orange-300' href="https://niloy.fun" target='_blank' rel='noreferrer'>Manage Inventory</a>
                <a className='hover:text-orange-300' href="https://niloy.fun" target='_blank' rel='noreferrer'>Login</a>
            </div>
        </div>
    );
};

export default Header;
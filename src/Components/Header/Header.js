import logo from '../../logo.svg';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-slate-700 text-slate-200 flex justify-around items-center py-5 sticky top-0 right-0 left-0 z-10'>
            <img onClick={() => navigate('/')} src={logo} alt="logo" className='cursor-pointer' />
            <div className='flex gap-8 text-lg font-semibold'>
                <Link className='hover:text-orange-300' to="/">Order</Link>
                <Link className='hover:text-orange-300' to="/order-review">Order Review</Link>
                <Link className='hover:text-orange-300' to="/manage-inventory">Manage Inventory</Link>
                <Link className='hover:text-orange-300' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;
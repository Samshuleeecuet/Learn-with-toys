import React from 'react';
import logo from './../../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navList = <div className="lg:flex">
        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
        <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'active' : 'default')}>All Toys</NavLink></li>
        <li><NavLink  to='/mytoys' className={({ isActive }) => (isActive ? 'active' : 'default')}>My Toys</NavLink></li>
        <li><NavLink  to='/addtoy' className={({ isActive }) => (isActive ? 'active' : 'default')}>Add a Toy</NavLink></li>
        <li><NavLink  to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blogs</NavLink></li>
    </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navList}
                </ul>
                </div>
                <Link>
                <div className='flex items-center'>
                    <img className='h-12 rounded-full pr-2' src={logo} />
                    <p className="font-bold text-xl">Learn With Toys</p>
                </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar tooltip tooltip-bottom" data-tip="Shakil">
                    <div className="w-14 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
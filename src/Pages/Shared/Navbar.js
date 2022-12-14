import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul> */}
                </div>
                <a class="btn btn-ghost normal-case text-xl">Affling</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                {/* <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul> */}
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>

            </div>
            <div class="navbar-end">
                <a class="btn"><Link to="/login">Sign Up</Link></a>
                
            </div>
        </div>
        

    );
};

export default Navbar;
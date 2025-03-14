import { useState } from 'react'
import './Header.css'


export default function Header() {
    var a = 'decoration-0 w-30 font-medium  text-neutral-500'
    return (
        <>
            <header class="navbar ">
                <img className='w-10 h-10 rounded-xl' src="../../image/image.png" alt="" />
                <div className="text-2xl font-bold text-pink-500">Chefify</div>
                <div className="grow relative">
                    <input type="text" className="w-50  outline-none h-3 pt-4 pl-0.5 pb-4 search-input ml-3 bg-neutral-200 rounded-md mr-4" placeholder="casescascsa"/>
                </div>
                <nav className="flex gap-1 nav-links">
                    <a className={a}>Work Book</a>
                    <a className={a}>Recipes</a>
                    <a className={a}>Ingredients</a>
                    <a className={a}>Discussions</a>
                    <a className={a}>About Us</a>
                </nav>
                <div className="flex items-center">
                    <button class="profile-button">My Recipe Box</button>
                    <img src="../../image/image.png" className='w-10 h-10 rounded-3xl' alt="User Profile" class="profile-image"/>
                </div>
            </header>
        </>
    )
}

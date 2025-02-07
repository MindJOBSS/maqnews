import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <h1 className='text-3xl font-bold'>MAQNEWS</h1>
            </div>
            <div className="navbar-center">
                <div className="searchBar join">
                    <input type="text" className='input join-item w-96' placeholder='search news' />
                    <button className='btn btn-outline join-item bg-neutral btn-md'>
                        <FaSearch size={22} className='text-neutral-content' />
                    </button>
                </div>
            </div>
            <div className="navbar-end gap-8">
                <div className="tabs tabs-border">
                    <input type="radio" name="tab" className="tab text-md" aria-label="Recent" defaultChecked />
                    <input type="radio" name="tab" className="tab text-md" aria-label="Trending" />
                    <input type="radio" name="tab" className="tab text-md" aria-label="For You" />
                </div>
                <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-9 rounded-full">
                        <span>US</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
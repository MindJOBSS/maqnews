import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

    const navigate = useNavigate();
    const [search , setSearch] = useState();

    function handleTrending(){
        navigate("/trending");
    }

    function handleRecent(){
        navigate("/");
    }

    function handleForYou(){
        navigate("/foryou");
    }

    function handleClick() {
        navigate(`/search/${search}`);
    }

    function handleChange(event){
        event.preventDefault();
        const {value} = event.target;
        setSearch(value);
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <h1 className='text-3xl font-bold'>MAQNEWS</h1>
            </div>
            <div className="navbar-center">
                <div className="searchBar join">
                    <input type="text" className='input join-item w-96' placeholder='search news' onChange={handleChange} />
                    <button className='btn btn-outline join-item bg-neutral btn-md' onClick={handleClick}>
                        <FaSearch size={22} className='text-neutral-content' />
                    </button>
                </div>
            </div>
            <div className="navbar-end gap-8">
                <div className="tabs tabs-border">
                    <input type="radio" name="tab" className="tab text-md" aria-label="Recent" defaultChecked onClick={handleRecent}/>
                    <input type="radio" name="tab" className="tab text-md" aria-label="Trending" onClick={handleTrending} />
                    <input type="radio" name="tab" className="tab text-md" aria-label="For You" onClick={handleForYou}/>
                </div>
                <button className='btn btn-active bg-error text-error-content' >Subscribe</button>
            </div>
        </div>
    )
}

export default Navbar
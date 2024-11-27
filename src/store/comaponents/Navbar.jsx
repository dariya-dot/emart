import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   
        <div className='navbarsection'>
            <div className="title">
            <h2>Emart</h2>
            </div>
            <div className="search">
            <input type="text"  placeholder='search...' name="" id="" />
            </div>
            <div className="user">
                <button>Signin/SignUp</button>
            </div>
            <div className="cart">Cart</div>

        </div>
        <div className='Navmenu'>
            <div className='leftmenu'>
                <ul>
                <Link to='/' ><li>Home</li></Link>
                <Link to='/mobiles'><li>Mobiles</li></Link>
                <Link to='/computers'><li>Computer</li></Link>
                <Link to='/watches'><li>Watches</li></Link>
                <Link to='/mens' ><li>Mens wear</li></Link>
                <Link to='/womans'><li>Womans wear</li></Link>
                
                </ul>
            </div>
            <div className='rightmenu'>
            <ul>
            <Link to='/furniture' ><li>Furniture</li></Link>
                <Link to='/kitchen' ><li>Kitchen</li></Link>
                <Link to='/books' ><li>Books</li></Link>
                <Link to='/speakers'><li>Speaker</li></Link>
                <Link to='/tvs'><li>Tv's</li></Link>
                <Link to='/fridges' ><li>Fridge</li></Link>
                <Link to='/ac' ><li>Ac's</li></Link>
                
            </ul>
            </div>
            
        </div>
      
    </>

    
  )
}

export default Navbar
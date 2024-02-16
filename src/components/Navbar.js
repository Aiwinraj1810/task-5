import React from 'react'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className='header'>
        
        <span style={{fontSize:30}}>Udemy</span>
        <div>Categories</div>

        <input type='text' style={{marginRight:"1rem"}} placeholder='Search here' >
        </input>

        <div>Courses</div>
        <div>Teach on Udemy</div>   
        <div><i class="fa-solid fa-cart-shopping"></i></div>   
        <button>Log-in</button>
        <button>Sign-up</button>
        <div style={{border:1, borderStyle:'solid', borderColor:'black',padding:"0.3rem"}}><i class="fa-solid fa-globe"></i></div> 
      </div>


    </div>
  )
}

export default Navbar

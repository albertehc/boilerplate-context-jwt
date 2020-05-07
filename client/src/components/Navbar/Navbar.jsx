import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <Link to={'/'}><button>Home</button></Link>
      <Link to={'/login'}><button>Login</button></Link>
      <Link to={'/signup'}><button>Signup</button></Link>
      <Link to={'/edit'}><button>Edit</button></Link>
      
    </>
  )
}

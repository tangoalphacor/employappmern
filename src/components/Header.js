import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='Heading'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <img src="" alt=""></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="/">EMPLOYAPP</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        {/* <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a> */}
        <Link to="/" className="nav-link active">Home</Link>
        
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="/">admin</a> */}
        <Link to="/admin" className="nav-link active">Login</Link>
      </li>
    </ul>
  </div>
  
  </div>
</nav>
    </div>
  )
}

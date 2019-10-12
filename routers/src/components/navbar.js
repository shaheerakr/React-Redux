import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import satire_img from '../images/Satire.png'

const Navbar = (props) =>{
    //console.log(props)
    // setTimeout(()=>{
    //     props.history.push("/about")
    // },2000)
    return(
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to ="/" className="brand-logo left">
                    <img src={satire_img} alt="satire"/>
                </Link>
                <ul className="right">
                    <li><Link to ="/">Home</Link></li>
                    <li><NavLink to ="/about">About</NavLink></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
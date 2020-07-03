import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar_uni">
                <div className="logo">
                   <Link to="/">UNI Resto Cafe </Link>
                </div>
                <div className="cart">
                    <span className="order">My Orders</span>
                    <span><Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></span>
                </div>
            </div>
        )
    }
}

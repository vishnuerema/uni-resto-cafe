import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    // constructor(props) 
    // {
    //   super(props);
    //   this.state = {
    //     productCount:[]
    //   }
    // }
    // componentDidMount () {
    //     localStorage.getItem("product_count") && this.setState({productCount:JSON.parse(localStorage.getItem("product_count"))});
    // }
    
    render() {
        return (
            <div className="navbar_uni">
                <div className="logo">
                   <Link to="/">UNI Resto Cafe </Link>
                </div>
                <div className="cart">
                    <span className="order">My Orders</span>
        <span><Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="badge badge-light bg_red">0</span></Link></span>
                </div>
            </div>
        )
    }
}

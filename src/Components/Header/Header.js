import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
 function Header(){
    return(
        <div className="header">
            <div className="header_left">
                <Link  to='/'><img className="header_icon" src='https://th.bing.com/th/id/OIP.ygDcQQ53di7pCSux8P-e5AHaDi?pid=ImgDet&rs=1'></img></Link>
                <Link style={{textDecoration:"none"}} to='/movies/popular'><span>Popular</span></Link>
                <Link style={{textDecoration:"none"}} to='/movies/top_rated'><span>Top Rated</span></Link>
                <Link style={{textDecoration:"none"}} to='/movies/upcoming'><span>Upcoming</span></Link>
            </div>
        </div>
        // <h1>Home page</h1>
    )
 }
 export default Header;
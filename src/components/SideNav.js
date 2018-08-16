import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SideNav = () => {
    return(
        <div>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <ul id="drawer" style={{backgroundColor : '#282651', marginTop : '51px'}}>
                <Link to="/"><li className="styleImageElement">
                                <h3> Admin </h3>
                                <img 
                                    style={{height : '90px', width : '90px' }} 
                                    src="http://amppob.com/wp-content/uploads/2015/10/jobs.jpg" 
                                    className="img-circle" 
                                />
                                <h5> Tester One </h5>
                            </li></Link>
                <Link to="/"><li className="styleElement">Dashboard</li></Link>
                <Link to="/orders"><li className="styleElement">Orders</li></Link>
                <Link to="/products"><li className="styleElement">Products</li></Link>
                <Link to="/withdraws"><li className="styleElement">Withdraws</li></Link>
                <Link to=""><li className="styleElement">Customers</li></Link>
                <Link to=""><li className="styleElement">Manage Category</li></Link>
                <Link to=""><li className="styleElement">Testimonial Section</li></Link>
                <Link to=""><li className="styleElement">Page Settings</li></Link>
                <Link to=""><li className="styleElement">Social Settings</li></Link>
                <Link to=""><li className="styleElement">General Settings</li></Link>
            </ul>
        </div>    
    );
}

export default SideNav;
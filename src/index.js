import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import Header from './containers/Header';
import Home from './containers/Home';
import Orders from './containers/Orders';
import Products from './containers/Products';
import Withdraws from './containers/Withdraws';
import ViewDetails from './components/ViewDetails'
import ContactCustomers from './components/ContactCustomers';
import UpdateProduct from './components/UpdateProduct';
import Login from './components/Auth/Login';
import ResetPassword from './components/Auth/ResetPassword';  
import ChangePassword from './containers/ChangePassword';  
import EditProfile from './containers/EditProfile';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {
    return(
    	<div style={{ height : '674px', background : '#282651'}}>
      		<Component {...props}/>
      	</div>
    )
}}/>
}      



const PublicRoute = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={props => {

    return  (
    	<div style={{marginLeft : '0px', marginRight : '0px'}}>
    		<Header {...props} />
    		<Component {...props}/>
    	</div>
    )
	}}/>
}

ReactDOM.render(
   
        <Router>
            <Switch>
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute exact path="/orders" component={Orders} />
                <PublicRoute exact path="/viewDetails" component={ViewDetails} />
                <PublicRoute exact path="/contactCustomer" component={ContactCustomers} />
                <PublicRoute exact path="/products" component={Products} />
                <PublicRoute exact path="/updateProducts" component={UpdateProduct} />
                <PublicRoute exact path="/editProfile" component={EditProfile} />
                <PublicRoute exact path="/changePassword" component={ChangePassword} />
                <PublicRoute exact path="/withdraws" component={Withdraws} />
                <PrivateRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/resetPassword" component={ResetPassword} />
            </Switch>
        </Router>,
    document.getElementById('root')
);
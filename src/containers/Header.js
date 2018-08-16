import React from 'react';
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavDropdown, 
    MenuItem,
    Col,
    Row,
    Grid,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import '../style.css';


const Header = () => {
    return(
        <Grid>
            <Grid>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect fixedTop>
                            <Navbar.Header>
                                <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                            <Nav pullRight>
                                <NavDropdown eventKey={3} title="Tester One" id="basic-nav-dropdown" style={{marginRight : '34px'}}>
                                    <MenuItem><Link to="/editProfile" style={{color : 'black'}}><i className="fas fa-cog"></i> Edit</Link></MenuItem>
                                    <MenuItem eventKey={3.2}><Link to="/changePassword" style={{color : 'black'}}><i className="fas fa-user"></i> Change Password</Link></MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}><Link to="/login" style={{color : 'black'}}><i className="fas fa-power-off"></i> Logout</Link></MenuItem>
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>              
                    </Col>
                </Row>    
            </Grid> 
            <Grid>       
                <Row>
                    <Col>
                        <SideNav />
                    </Col>    
                </Row>        
            </Grid> 
        </Grid>     
    );
}

export default Header;
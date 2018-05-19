import React from 'react';
import {Navbar, DropdownButton,MenuItem,Image,Row, Col } from 'react-bootstrap'
import logo from '../image/logo.png'
import style from '../style/header.js'
import {Link} from 'react-router-dom'
export default ()=>{
	const hamburger=<div style={{height:'auto'}}>
		<div style={style.header.hamburger}></div>
		<div style={style.header.hamburger}></div>
		<div style={style.header.hamburger}></div>
	</div>
	return ( //bsStyle="" and add custom Style
		<Navbar fixTop bsStyle="" style={style.commonStyle} fluid>
			<Row>
				<Col xs={6} sm={2} style={style.header.logo}>
					<Link to='/'>
						<Image src={logo} alt="logo" height="70px" style={{paddingLeft:'40px'}} />
					</Link>
				</Col>
				<Col sm={8} xsHidden style={style.header.mainText}>
					<span>
						TRAX
					</span>
				</Col>
				<Col xs={6} sm={2} style={style.header.menuBar}>
					<DropdownButton eventKey={3} pullRight
					    noCaret
					    title={hamburger}
					    id="basic-nav-dropdown"
					    bsStyle=""
					    style={{backgroundColor:'white',display:'inline'}}
					>
				        <MenuItem eventKey={3.1}>
				        	<Link to="/login">Sign up/Log in</Link>
				        </MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.5}>
				        	<Link to="/profile">Profile</Link>
				        </MenuItem>
				        <MenuItem divider />
{/*				        <MenuItem eventKey={3.2}>
				        	<Link to="/settings">Settings</Link>
				        </MenuItem>
				        <MenuItem divider />*/}
				        <MenuItem eventKey={3.3}>
				        	<Link to="/news">News</Link>
				        </MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.4}>
				        	<Link to="/contact">Contact</Link>
				        </MenuItem>
	
				    </DropdownButton>
				</Col>
			</Row>
		</Navbar>
	)
}

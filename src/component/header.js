import React from 'react';
import {Navbar, DropdownButton,MenuItem,Image,Row, Col } from 'react-bootstrap'
import logo from '../image/logo.png'
import style from '../style/header.js'
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
					<a href='#'><Image src={logo} alt="logo" height="70px" style={{paddingLeft:'40px'}} /></a>
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
					    style={{backgroundColor:'white'}}
					>
				        <MenuItem eventKey={3.1}>Sign up/Log in</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.2}>FAQs</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>News</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.4}>Review</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.5}>Contact us</MenuItem>
				    </DropdownButton>
				</Col>
			</Row>
		</Navbar>
	)
}

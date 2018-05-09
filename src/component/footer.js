import React from 'react';
import {Navbar, Col, Form, FormControl,FormGroup, Image, Row} from 'react-bootstrap';
import style from '../style/footer.js';
import whitelogo from "../image/whitelogo.png";

export default ()=>{
	return (
		<Navbar style={style.footerCommon} fluid>

		<Row>
			<Col sm={3} style={style.media.common}>
				<Image src={whitelogo} style={style.whitelogo}/>
				<i style={style.media.icon} class="fab fa-instagram" aria-hidden="true"></i>
				<i style={style.media.icon} class="fab fa-facebook" aria-hidden="true"></i>
				<i style={style.media.icon} class="fab fa-twitter" aria-hidden="true"></i>
			</Col>
			<Col sm={4} xsHidden style={style.news.common}>
				<h4 style={style.news.text}>Latest News</h4>
				<p>
					<span>16/2/2017</span><br/>
					Tax returns are coming - you can start making changes online
				</p>
			</Col>
			<Col sm={5} style={style.form.common}>
				<h4 style={style.form.text}>Get the latest Tax news & Advice</h4>
				<Form>
					<FormGroup>
						<Col xs={12} sm={10}>
							<FormControl type="input" placeHolder="Enter your email address" /><br/>
						</Col>
						<Col xs={12} sm={5}>
							<FormControl style={style.form.button} type="button" value="SUBSCRIBE"/>
						</Col>
					</FormGroup>
				</Form>
			</Col>
			</Row>

			<div style={style.finalText}>
				TRAX @ 2018 - All rights reserved
			</div>

		</Navbar>
	)
}

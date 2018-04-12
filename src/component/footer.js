import React from 'react';
import {Navbar, Col, Form, FormControl,FormGroup} from 'react-bootstrap'
import style from '../style/footer.js'
export default ()=>{
	return (
		<Navbar style={style.footerCommon}>
			<Col sm={4} style={style.media.common}>
				<h4 style={style.media.text}>Trax</h4>
				<i style={style.media.icon} class="fa fa-instagram" aria-hidden="true"></i>
				<i style={style.media.icon} class="fa fa-facebook" aria-hidden="true"></i>
				<i style={style.media.icon} class="fa fa-twitter" aria-hidden="true"></i>
			</Col>
			<Col sm={4} xsHidden style={style.news.common}>
				<h4 style={style.news.text}>Latest News</h4>
				<p>
					<span>16/2/2017</span><br/>
					Tax returns are coming - you can start making change online
				</p>
			</Col>
			<Col sm={4} style={style.form.common}>
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
			<div style={style.finalText}>
				TRAX @ 2018 - All rights reserved
			</div>
		</Navbar>
	)
}
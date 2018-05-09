import React from 'react';
import {Col, Row, Grid,Image} from 'react-bootstrap';
import Image3 from '../image/news/employee.jpeg';
import Image2 from '../image/news/tax.jpg';
import Image1 from '../image/news/travel.jpeg';
import style from '../style/news.js';

export default ()=>{
	return (
		<Grid style={style.common}>
			<h1 style={style.head}>Tax News</h1>
			<Row>
				<Col sm={2} xsHidden style={style.filter}>
					<h5>April 2018</h5>
					<h5>March 2018</h5>
					<h5>February 2018</h5>
					<h5>January 2018</h5>
				</Col>
				<Col xs={12} sm={4}>
					<Image src={Image1} responsive/>
				</Col>
				<Col xs={12} sm={4}>
					<p style={style.title}>April 4 2018</p>
					<p style={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue dolor, egestas vitae magna vel, posuere sodales orci. Nunc sed mi nec metus fermentum euismod vel et nunc. Sed ipsum orci, accumsan nec justo quis, viverra fringilla urna. In hac habitasse platea dictumst. Donec ultrices egestas lacus, id laoreet leo ornare maximus. Proin interdum ac erat vitae blandit. Pellentesque facilisis turpis magna, eget consequat nibh imperdiet a. </p>
				</Col>
			</Row><br/>
			<Row>
				<Col xs={10} sm={4}  smPush={4} smOffset={2}>
					<Image src={Image2} responsive/>
				</Col>
				<Col xs={12} sm={4}  smPull={6} smOffset={2}>
					<p style={style.title}>March 24 2018</p>
					<p style={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue dolor, egestas vitae magna vel, posuere sodales orci. Nunc sed mi nec metus fermentum euismod vel et nunc. Sed ipsum orci, accumsan nec justo quis, viverra fringilla urna. In hac habitasse platea dictumst. Donec ultrices egestas lacus, id laoreet leo ornare maximus. Proin interdum ac erat vitae blandit. Pellentesque facilisis turpis magna, eget consequat nibh imperdiet a. </p>
				</Col>
			</Row><br/>
			<Row>
				<Col xs={12} sm={4} smOffset={2}>
					<Image src={Image3} responsive/>
				</Col>
				<Col xs={12} sm={4}>
					<p style={style.title}>March 17 2018</p>
					<p style={style.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue dolor, egestas vitae magna vel, posuere sodales orci. Nunc sed mi nec metus fermentum euismod vel et nunc. Sed ipsum orci, accumsan nec justo quis, viverra fringilla urna. In hac habitasse platea dictumst. Donec ultrices egestas lacus, id laoreet leo ornare maximus. Proin interdum ac erat vitae blandit. Pellentesque facilisis turpis magna, eget consequat nibh imperdiet a. </p>
				</Col>
			</Row><br/>
		</Grid>
	)
}
